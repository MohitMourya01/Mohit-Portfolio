import createSchema from 'part:@sanity/base/schema-creator'
import schemaTyypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials'

export default createSchema({
    name:'default',
    types:schemaTyypes.concat([
        testimonials
    ])
})