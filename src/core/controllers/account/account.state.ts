import { App } from '../../pulse';
import { User } from '../../interfaces/account.interfaces';
import { Rooms } from '../../interfaces/rooms.interfaces'

export const AccountData = {
  id: App.State(undefined).type(String).persist('user-id'),
  email: App.State(undefined).type(String).persist('user-email'),
  username: App.State(undefined).type(String).persist('user-username'),
  token: App.State(undefined).type(String).persist('user-token'),
  status: App.State(undefined).type(String).persist('user-status')
}

export const AccountCollection = App.Collection<Rooms>({
  groups: ['rooms']
});