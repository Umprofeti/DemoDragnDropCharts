import { CollectionConfig } from "payload/types";
import { isUser } from "../access/isAdmin";

const CategoryProducts: CollectionConfig = {
    slug: 'category',
    access: {
        read: isUser,
        update: isUser,
        delete: isUser,
        create: isUser
    },
    admin:{
        useAsTitle:'Categoria'
    },
    fields: [
        {
            type: 'text',
            name: 'Categoria',
            required: true
        }
    ]
}

export default CategoryProducts