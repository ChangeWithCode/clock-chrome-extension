document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submitButton');
  const textInput = document.getElementById('textInput');
  const clockElement = document.getElementById('clock');
  const timezoneSelect = document.getElementById('timezoneSelect');

  const countries = [
    { name: 'Pakistan', timezone: 'Asia/Karachi', difference: 0 },
    { name: 'Afghanistan', timezone: 'Asia/Kabul', difference: -1 },
    { name: 'Albania', timezone: 'Europe/Tirane', difference: -4 },
    { name: 'Algeria', timezone: 'Africa/Algiers', difference: -5 },
    { name: 'Andorra', timezone: 'Europe/Andorra', difference: -4 },
    { name: 'Angola', timezone: 'Africa/Luanda', difference: -4 },
    { name: 'Argentina', timezone: 'America/Argentina/Buenos_Aires', difference: -8 },
    { name: 'Australia', timezone: 'Australia/Sydney', difference: 5 },
    { name: 'Austria', timezone: 'Europe/Vienna', difference: -4 },
    { name: 'Bahrain', timezone: 'Asia/Bahrain', difference: -2 },
    { name: 'Bangladesh', timezone: 'Asia/Dhaka', difference: -2 },
    { name: 'Belgium', timezone: 'Europe/Brussels', difference: -4 },
    { name: 'Brazil', timezone: 'America/Sao_Paulo', difference: -8 },
    { name: 'Canada', timezone: 'America/Toronto', difference: -9 },
    { name: 'China', timezone: 'Asia/Shanghai', difference: -5 },
    { name: 'Colombia', timezone: 'America/Bogota', difference: -10 },
    { name: 'Denmark', timezone: 'Europe/Copenhagen', difference: -4 },
    { name: 'Egypt', timezone: 'Africa/Cairo', difference: -3 },
    { name: 'France', timezone: 'Europe/Paris', difference: -4 },
    { name: 'Germany', timezone: 'Europe/Berlin', difference: -4 },
    { name: 'Greece', timezone: 'Europe/Athens', difference: -3 },
    { name: 'Hong Kong', timezone: 'Asia/Hong_Kong', difference: -3 },
    { name: 'India', timezone: 'Asia/Kolkata', difference: -2.5 },
    { name: 'Indonesia', timezone: 'Asia/Jakarta', difference: -2 },
    { name: 'Iran', timezone: 'Asia/Tehran', difference: -1.5 },
    { name: 'Iraq', timezone: 'Asia/Baghdad', difference: -2 },
    { name: 'Italy', timezone: 'Europe/Rome', difference: -4 },
    { name: 'Japan', timezone: 'Asia/Tokyo', difference: -4 },
    { name: 'Jordan', timezone: 'Asia/Amman', difference: -3 },
    { name: 'Kuwait', timezone: 'Asia/Kuwait', difference: -2 },
    { name: 'Lebanon', timezone: 'Asia/Beirut', difference: -3 },
    { name: 'Malaysia', timezone: 'Asia/Kuala_Lumpur', difference: -3 },
    { name: 'Mexico', timezone: 'America/Mexico_City', difference: -11 },
    { name: 'Netherlands', timezone: 'Europe/Amsterdam', difference: -4 },
    { name: 'New Zealand', timezone: 'Pacific/Auckland', difference: 6 },
    { name: 'Nigeria', timezone: 'Africa/Lagos', difference: -5 },
    { name: 'Norway', timezone: 'Europe/Oslo', difference: -4 },
    { name: 'Oman', timezone: 'Asia/Muscat', difference: -1 },
    { name: 'Peru', timezone: 'America/Lima', difference: -11 },
    { name: 'Philippines', timezone: 'Asia/Manila', difference: -2 },
    { name: 'Poland', timezone: 'Europe/Warsaw', difference: -3 },
    { name: 'Portugal', timezone: 'Europe/Lisbon', difference: -4 },
    { name: 'Qatar', timezone: 'Asia/Qatar', difference: -3 },
    { name: 'Russia', timezone: 'Europe/Moscow', difference: -2 },
    { name: 'Saudi Arabia', timezone: 'Asia/Riyadh', difference: -2 },
    { name: 'Singapore', timezone: 'Asia/Singapore', difference: -3 },
    { name: 'South Africa', timezone: 'Africa/Johannesburg', difference: -3 },
    { name: 'South Korea', timezone: 'Asia/Seoul', difference: -4 },
    { name: 'Spain', timezone: 'Europe/Madrid', difference: -4 },
  ];

  countries.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.timezone;
    option.textContent = country.name;
    timezoneSelect.appendChild(option);
  });


  function updateClock() {
    const now = new Date();
    const selectedTimezone = timezoneSelect.value;
    const difference = countries.find(country => country.timezone === selectedTimezone)?.difference || 0;
    const adjustedTime = new Date(now.getTime() + difference * 60 * 60 * 1000);
    const options = { timeZone: selectedTimezone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = adjustedTime.toLocaleTimeString(undefined, options);
    clockElement.textContent = formattedTime;
  }

  // Call the updateClock function initially and set it to update every second
  updateClock();
  setInterval(updateClock, 1000);
});
