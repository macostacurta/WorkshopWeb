import { UserRepository } from '../Users'

interface ILoginParams {
  email: string
  password: string
}

export class AuthService {
  async login({ email, password }: ILoginParams): Promise<boolean> {
    const userRepository = new UserRepository()
    const userFound = await userRepository.getUserByEmail(email)

    if (!userFound) throw new Error("No user was found")


      
    const user = users.find(user => {
      if (user.email == email
        // && user.password == password
      ) {
        return true
      }
    })

    const isUserAuthenticated = !!user ? true : false
    return isUserAuthenticated
  }
}
