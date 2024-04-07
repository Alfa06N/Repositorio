import moment from 'moment';

const time = (() => {
  const now = moment();

  const filterByDate = (data) => {
    const today = now.clone().startOf('day');
    const tomorrow = today.clone().add(1, 'day');
    const endOfWeek = today.clone().endOf('week');
    const endOfMonth = today.clone().endOf('month');

    const todayTasks = [];
    const tomorrowTasks = [];
    const thisWeekTasks = [];
    const thisMonthTasks = [];
    const laterTasks = [];
    
    data.forEach(element => {
      const dueDate = moment(element.dueDate, 'YYYY-MM-DD');

      if (dueDate.isSame(today, 'day')) {
        todayTasks.push(element);
      } else if (dueDate.isSame(tomorrow, 'day')) {
        tomorrowTasks.push(element);
      } else if (dueDate.isAfter(today) && dueDate.isBefore(endOfWeek)) {
        thisWeekTasks.push(element);
      } else if (dueDate.isAfter(today) && dueDate.isBefore(endOfMonth)) {
        thisMonthTasks.push(element);
      } else {
        laterTasks.push(element);
      }
    });

    return {
      'Today': todayTasks,
      'Tomorrow': tomorrowTasks,
      'This Week': thisWeekTasks,
      'This Month': thisMonthTasks,
      'Later': laterTasks
    }
  }

  return { filterByDate };
})();

export default time;