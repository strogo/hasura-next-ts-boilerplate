import { AuthUser } from "../../shared/auth";
import * as types from "./types";

export const actionOpenMobileSidebar: types.OpenMobileSidebarAction =
  ({ type: types.OPEN_MOBILE_SIDEBAR });

export const actionCloseMobileSidebar: types.CloseMobileSidebarAction =
  ({ type: types.CLOSE_MOBILE_SIDEBAR });

export const actionAuthenticate: (authUser: AuthUser) => types.AuthenticateAction =
  (authUser) => ({
    type: types.AUTHENTICATE,
    payload: authUser
  });

export const actionUnauthenticate: types.UnauthenticateAction =
  ({ type: types.UNAUTHENTICATE });

export const actionInitialLoad = (payload: boolean): types.InitialLoadAction =>
  ({ type: types.INITIAL_LOAD, payload });
