import Container from '@components/shared/Container';
import {
  notificationFiltersUpdate,
  getUserNotificationsRequest,
  updateNotificationRequest,
} from '@entities/notification/redux/actions';
import { useTypedSelector } from '@hooks/useNewTypedSelector';
import { dateParse } from '@utils/date-utils';
import { DEFAULT_NOTIFICATION_LIMIT } from '@utils/pagination';
import classNames from 'classnames';
import React, { ComponentType, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './NotificationTab.module.scss';

const NotificationTab: ComponentType<any> = () => {
  const dispatch = useDispatch();
  const notification = useTypedSelector(
    (state) => state.notification?.notificationList
  );
  const { sort, order } = useTypedSelector(
    (state) => state.notification?.filter
  );

  const isUnreadNotification = useTypedSelector(
    (state) => state.notification?.isUnreadNotification
  );
  const sortHandle = (params) => {
    dispatch(notificationFiltersUpdate(params));
  };

  const unReadIds = notification
    ?.filter((item) => item.isRead === false)
    .map((item) => item.id);

  useEffect(() => {
    unReadIds &&
      unReadIds.length > 0 &&
      dispatch(updateNotificationRequest({ notificationIds: unReadIds }));
  }, [notification, unReadIds]);

  useEffect(() => {
    dispatch(
      getUserNotificationsRequest({
        skip: Number(0),
        take: Number(DEFAULT_NOTIFICATION_LIMIT),
        sort: String(sort || 'createdAt'),
        order: String(order || 'DESC'),
      })
    );
  }, [sort, order]);

  const notificationRender = notification?.map((item) => {
    return (
      <div className={styles.notificationItem} key={item.id}>
        <h2 className={styles.notificationItem__title}>{item?.title}</h2>
        <p className={styles.notificationItem__body}>{item?.message}</p>
        <div className={styles.notificationItem__date}>
          {dateParse(item.createdAt, `dd.MM.yyyy hh:mm a`)}
        </div>
      </div>
    );
  });

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.filter}>
          <div className={classNames(styles['notification-wrapper'])}>
            {notificationRender}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NotificationTab;
