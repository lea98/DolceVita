const path = require('path')
//export funkcije koje se registriraju u gatsby i izvrse kad tribaju

//destruktruriranje, uzimamo node i actions
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
//gledaj samo md, && da mi makne iz contentfula, a ostanu samo postovi
    if (node.internal.type === 'MarkdownRemark'&&node.frontmatter.date !=null) {
        //dodaj slug i pozivamo createnode, objekt sa 3 popertija
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

//dobit put do templatea
//dobit markdown podatke
//kreiranje novih dinamickih stranica

//promise
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark(filter: {fields: {slug: {regex: ""}}}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}

