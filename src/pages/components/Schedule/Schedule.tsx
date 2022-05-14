import { useState } from 'react';
import { Calendar } from 'react-modern-calendar-datepicker';

import { clients } from './data';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import Button from '~components/Button/Button';

import WaitListModal from './components/WaitListModal/WaitListModal';

import scss from './Schedule.module.scss';

function Schedule() {
  const [isOpen, setIsOpen] = useState(false);

  const renderSchedule = () =>
    clients.map((client) => (
      <div className={scss.scheduleContainer} key={client.time}>
        <div className={scss.timeWrapper}>
          <span className={scss.time}>{client.time}</span>
        </div>
        <div className={scss.userWrapper}>
          <span className={scss.user}>{client.name}</span>
          <div className={scss.scheduleTypeWrapper}>
            <div className={scss.scheduleBall} />
            <span className={scss.scheduleType}>{client.scheduleType}</span>
          </div>
        </div>
      </div>
    ));

  return (
    <div className={scss.container}>
      <div className={scss.content}>
        <div className={scss.table}>{renderSchedule()}</div>
        <div className={scss.calendarWrapper}>
          <Calendar value={null} shouldHighlightWeekends colorPrimary="#0582ad" />
          <Button
            className={scss.btn}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Adicionar lista de espera
          </Button>
        </div>
      </div>
      <WaitListModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
}

export default Schedule;
