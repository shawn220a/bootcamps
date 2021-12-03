-- Read tables
SELECT * FROM doctors;

SELECT * FROM patients;

-- Update rows
UPDATE doctors
SET taking_patients = FALSE
WHERE id = 1;

UPDATE patients
SET health_status = 'healthy'
WHERE id = 1;

-- Delete row
DELETE FROM patients
WHERE id = 1;
