import requests
from bs4 import BeautifulSoup
import time
import json
import re

file_dir = 'Z:/Travis/TrilogyCE/Week 8 - ETL/'

film_urls = []

for year in range(1990,2019):
    time.sleep(1)
    print(year)
    soup = BeautifulSoup(requests.get(f'https://en.wikipedia.org/wiki/List_of_American_films_of_{year}').text, 'html.parser')
    tables = soup.find_all('table', {'class':'wikitable'})
    for table in tables:
        for tr in table.find_all('tr')[1:]:
            if tr.find('a'):
                film_urls.append({'year':year, 'url':tr.find('a').get('href')})
                
with open(f'{file_dir}wikipedia.movie.urls', 'w') as file:
    json.dump(film_urls, file)

with open(f'{file_dir}wikipedia.movie.urls', 'r') as file:
    film_urls = json.load(file)

films = []
error_urls = []

def scrape_movie_data(film_url):
    url = film_url['url']
    year = film_url['year']
    try:
        film = {}
        response = requests.get(f'https://en.wikipedia.org{url}')
        soup = BeautifulSoup(response.text, 'html.parser')

        film['url'] = f'https://en.wikipedia.org{url}'
        film['year'] = year
        imdb_link = soup.find('span', {'id':'External_links'}).parent.find_next_sibling('ul').find('a', href=re.compile(r'imdb.com/title'))
        if imdb_link:
            if imdb_link.has_attr('href'):
                film['imdb_link'] = imdb_link.get('href')
        infobox = soup.find('table', {'class':'infobox'})

        if 'Directed by' not in infobox.text:
            for div in soup.find_all('div', {'role':'note'}):
                if ' film, see' in div.text:
                    new_url = div.find('a').get('href')
                    print(new_url)
                    film['url'] = new_url
                    response = requests.get(f'https://en.wikipedia.org{new_url}')
            soup = BeautifulSoup(response.text, 'html.parser')
            infobox = soup.find('table', {'class':'infobox'})
        
        for tr in infobox.find_all('tr'):
            if tr.th:
                if tr.td:
                    text = [s.replace('\xa0',' ') for s in list(tr.td.stripped_strings)]
                    hidden_texts = []
                    for hidden_text in tr.td.find_all('span', attrs={'style':'display:none'}):
                        hidden_texts.append(hidden_text.stripped_strings)
                    if len(text) == 1:
                        film[tr.th.text.replace('\xa0',' ')] = text[0]
                    else: 
                        regex = re.compile(r'\[[0-9]+\]')
                        items = [i for i in text if not regex.search(i)]
                        if len(items) == 1:
                            film[tr.th.text.replace('\xa0',' ')] = text[0]
                        else:
                            film[tr.th.text.replace('\xa0',' ')] = text

                else:
                    if 'title' not in film:
                        film['title'] = tr.th.text
                    
        return film
    except AttributeError as e:
        error_urls.append(url)
        print(e)
        return {}

for i, film_url in enumerate(film_urls):
    time.sleep(1)
    print(f'{i+1}/{len(film_urls)}: {film_url["url"]}')
    film_data = scrape_movie_data(film_url)
    films.append(film_data)
        
with open(f'{file_dir}wikipedia.movies.json', 'w', encoding='UTF-8') as file:
    json.dump(films, file)
    
with open(f'{file_dir}wikipedia.movies.error_urls', 'w') as file:
    json.dump(error_urls, file)