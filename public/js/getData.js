fetch('/patients')
  .then((res) => res.json())
  .then((patients) => {
    const container = document.querySelector('#container');
    patients.forEach((patient) => {
      const patientRow = document.createElement('dev');

      const patientName = document.createElement('p');
      patientName.textContent = patient.patient_name;

      const patientAge = document.createElement('p');
      patientAge.textContent = patient.age;

      const date = document.createElement('p');
      date.textContent = patient.booking_date;

      patientRow.appendChild(patientName);
      patientRow.appendChild(patientAge);
      patientRow.appendChild(date);
      container.appendChild(patientRow);
    });
  });
