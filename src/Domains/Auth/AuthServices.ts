import { UserRepository } from '../Users'

interface ILoginParams {
  email: string
  password: string
}

export class AuthService {
  async login({ email, password }: ILoginParams) {
    const userRepository = new UserRepository()
    const users = userRepository.getUsers()

    const user = users.find(user => {
      if (user.email == email && user.password == password) {
        return true
      }
    })


  }
}
