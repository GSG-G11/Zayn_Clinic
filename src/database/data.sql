BEGIN;
DROP TABLE IF EXISTS booking, patient CASCADE;
CREATE TABLE booking (
    patient_id SERIAL  PRIMARY KEY,
    patient_name VARCHAR (100) NOT NULL,
    age INT NOT NULL,
    Booking_Date DATE NOT NULL
);


INSERT INTO booking (patient_name,age, Booking_Date ) VALUES ('abdulrahman', 22, '2022-03-01T22:00:00.000Z');

COMMIT;