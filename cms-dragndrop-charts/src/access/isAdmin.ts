import {Access} from 'payload/types';
import { User } from '../payload-types';

export const isAdmin : Access<any, User> = ({req: {user}}) => {
    return Boolean (user?.Rol?.includes('10'));
}

export const isAdminOrEditor: Access<any, User> = ({req: {user}}) => {
    return Boolean (user?.Rol?.includes('10') || user?.Rol?.includes('20'));
}

export const isNotifier:Access<any,User> = ({req: {user}}) => {
    return Boolean (user?.Rol?.includes('30'))
}

export const isAdminOrNotifier:Access<any,User> = ({req: {user}}) => {
    return Boolean (user?.Rol?.includes('10') || user?.Rol?.includes('30'))
}

export const isUser:Access<any, User> = ({req: {user}}) => {
    return Boolean (user?.Rol?.includes('10') || user?.Rol?.includes('20') || user?.Rol?.includes('30') || user?.Rol?.includes('40'))
}