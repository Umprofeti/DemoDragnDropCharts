import { CollectionConfig } from "payload/types";
import { isUser } from "../access/isAdmin";

const Products : CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'Producto'
    },
    access: {
        read: isUser,
        create: isUser,
        update: isUser,
        delete: isUser
    },
    fields: [
        {
            type: 'text',
            required: true,
            name: 'NombreDelProducto'
        },
        {
            type: 'relationship',
            relationTo: 'category',
            hasMany:false,
            name:'Categoria'
        },
        {
            type: 'upload',
            relationTo: 'media',
            required: true,
            name: 'ImagenDelProducto'
        },
        {
            type: 'number',
            name: 'CantidadDeExistencias',
            required: true
        },
        {
            type: 'number',
            name: 'CantidadCompradas'
        },
        {
            type: 'number',
            name: 'CostoDelProducto',
            required: true
        }
    ]
}

export default Products