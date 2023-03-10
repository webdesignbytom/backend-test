import { Router } from 'express';
import {
  getAllNotifications,
  createNotification,
  getNotificationsByUserId,
  setNotificationToViewed,
  deleteNotification,
  getViewedNotificationsByUserId
} from '../controllers/notifications.js';


const router = Router();

router.get('/', getAllNotifications);
router.get('/:userId', getNotificationsByUserId);
router.get('/:userId/:viewed', getViewedNotificationsByUserId);
router.post('/create', createNotification);
router.put('/viewed/:notificationId', setNotificationToViewed);
router.delete('/delete/:notificationId', deleteNotification);

export default router;
