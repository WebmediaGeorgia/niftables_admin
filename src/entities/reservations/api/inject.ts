import Injector from 'src/injector';
import { RESERVATION_REPO } from 'src/injector/constants';
import HTTPReservationRepo from './HTTPReservationRepo';

Injector.set(RESERVATION_REPO, new HTTPReservationRepo());
