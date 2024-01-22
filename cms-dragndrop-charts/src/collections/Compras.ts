import { CollectionConfig } from "payload/types";
import { isUser } from "../access/isAdmin";

const Compras:CollectionConfig = {
    slug: 'compras',
    admin: {
        useAsTitle: 'NombreDelComprador'
    },
    access: {
        read: isUser,
        create: isUser,
        update: isUser,
        delete: isUser
    },
    fields:  [
        {
            type: 'text',
            required: true,
            name: 'NombreDelComprador'
        },
        {
            type: 'relationship',
            relationTo: 'products',
            hasMany: true,
            name:'ProductosComprados'
        },
        {
            type: 'number',
            required:true,
            name: 'EdadDelComprador'
        }
    ]

}

export default Compras;