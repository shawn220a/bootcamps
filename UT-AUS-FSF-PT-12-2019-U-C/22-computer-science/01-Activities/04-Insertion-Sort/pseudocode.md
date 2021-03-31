- start at the beginning of the array

- move into a loop

- compare only 2 values

- swap if left is more than right

- repeat until this current value is less than the right value OR the value is at the far right of the array

- pseudo code:

```
    for i ← 1 to length(A) - 1

        x ← A[i]

        j ← i

        while j > 0 and A[j-1] > x

            A[j] = A[j-1]

            j ← j - 1

        end while

        A[j] = x

    end for
```
* Then, test your algorithm with each of the commented out arrays of data. As a bonus, use Benchmark.js to time it in both cases.