import { CollectionConfig } from "payload/types";
import { isAdmin, isAdminOrEditor, isUser } from "../access/isAdmin";

const Media:CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
        create: isUser,
        update: isUser,
        delete: isUser
    },
    admin: {
        hidden:true
    },
    upload:{
        staticURL: '/media',
        staticDir: 'media',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*']
    },
    fields: []
}

export default Media;