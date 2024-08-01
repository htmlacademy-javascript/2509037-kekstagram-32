function meetingInWorkingHours (startTime, endTime, meetingStart, meetingDuration) {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;

  // Преобразуем время начала встречи в минуты
  const [meetingHour, meetingMinute] = meetingStart.split(':').map(Number);
  const meetingStartMinutes = meetingHour * 60 + meetingMinute;

  // Вычисляем время окончания встречи в минутах
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  // Проверяем, что встреча начинается и заканчивается в рамках рабочего дня
  return meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes;

}
meetingInWorkingHours();