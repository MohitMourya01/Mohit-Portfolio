export default {
    name:'testimonials',
    title:'Testimonials',
    type:'document',
    fields : [
        { name:'name',
            title:'Name',
            type:'string'
        },
        { name:'imageurl',
            title:'ImgURL',
            type:'image',
            options:{
                hotspot:true,
            } 
        },
        { name:'company',
            title:'Company',
            type:'string'
        },
        { name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ]

    
}