import { CollectionConfig } from 'payload/types'
import { isAdmin, isUser } from '../access/isAdmin'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    useAPIKey: true
  },
  access: {
    read: isUser,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      type: 'select',
      name: 'Rol',
      options: [
        {
          label: 'Administrador',
          value: '10'
        },
        {
          label: 'Editor',
          value: '20'
        },
        {
          label: 'Cliente',
          value: '30'
        }
      ] 
    }
  ],
}

export default Users
