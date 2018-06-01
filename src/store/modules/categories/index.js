/**
 * Created by daesubkim on 2018. 5. 31..
 */

const state = {
  items: [
    {
      depth: 1,
      label: '01',
      selected: {nodeId: '7141123011', name: 'Clothing, Shoes & Jewelry'},
      nodes: [
        {nodeId: '2619525011', name: 'Appliances'},
        {nodeId: '2617941011', name: 'Arts, Crafts & Sewing'},
        {nodeId: '15684181', name: 'Automotive'},
        {nodeId: '165796011', name: 'Baby Products'},
        {nodeId: '3760911', name: 'Beauty & Personal Care'},
        {nodeId: '2335752011', name: 'Cell Phones & Accessories'},
        {nodeId: '7141123011', name: 'Clothing, Shoes & Jewelry'},
        {nodeId: '172282', name: 'Electronics'},
        {nodeId: '16310101', name: 'Grocery & Gourmet Food'},
        {nodeId: '3760901', name: 'Health & Household'},
        {nodeId: '1055398', name: 'Home & Kitchen'},
        {nodeId: '16310091', name: 'Industrial & Scientific'},
        {nodeId: '11091801', name: 'Musical Instruments'},
        {nodeId: '1064954', name: 'Office Products'},
        {nodeId: '2972638011', name: 'Patio, Lawn & Garden'},
        {nodeId: '2619533011', name: 'Pet Supplies'},
        {nodeId: '229534', name: 'Software'},
        {nodeId: '3375251', name: 'Sports & Outdoors'},
        {nodeId: '228013', name: 'Tools & Home Improvement'},
        {nodeId: '165793011', name: 'Toys & Games'},
        {nodeId: '468642', name: 'Video Games'}
      ]
    },
    {
      depth: 2,
      label: '02',
      selected: {nodeId: '7141124011', name: 'Departments'},
      nodes: [
        {nodeId: '7141124011', name: 'Departments'},
        {nodeId: '7141125011', name: 'Featured Categories'}
      ]
    },
    {
      depth: 3,
      label: '03',
      selected: {name:'Women', nodeId:'7147440011'},
      nodes: [
        {name:'Women', nodeId:'7147440011'},
        {
          name:'Men',
          nodeId:'7147441011'},
        {
          name:'Girls',
          nodeId:'7147442011'},
        {
          name:'Boys',
          nodeId:'7147443011'},
        {
          name:'Baby',
          nodeId:'7147444011'},
        {
          name:'Novelty & More',
          nodeId:'7147445011'},
        {
          name:'Luggage & Travel Gear',
          nodeId:'9479199011'},
        {
          name:'Uniforms, Work & Safety',
          nodeId:'7586144011'},
        {
          name:'Costumes & Accessories',
          nodeId:'7586165011'},
        {
          name:'Shoe, Jewelry & Watch Accessories',
          nodeId:'7586146011'}
      ]
    },
    {
      depth: 4,
      label: '04',
      selected: {
        name:'Clothing',
        nodeId:'1040660'
      },
      nodes: [
        {
          name:'Clothing',
          nodeId:'1040660'},
        {
          name:'Shoes',
          nodeId:'679337011'},
        {
          name:'Jewelry',
          nodeId:'7192394011'},
        {
          name:'Watches',
          nodeId:'6358543011'},
        {
          name:'Handbags & Wallets',
          nodeId:'15743631'},
        {
          name:'Accessories',
          nodeId:'2474936011'},
        {
          name:'Shops',
          nodeId:'7581668011'}
      ]
    },
    {
      depth: 5,
      label: '05',
      selected: // null,
      // TODO: comment these
      {
        name:'Tops & Tees',
        nodeId:'2368343011'
      },
      nodes: [
        {
          name:'Dresses',
          nodeId:'1045024'},
        {
          name:'Tops & Tees',
          nodeId:'2368343011'},
        {
          name:'Sweaters',
          nodeId:'1044456'},
        {
          name:'Fashion Hoodies & Sweatshirts',
          nodeId:'1258603011'},
        {
          name:'Jeans',
          nodeId:'1048188'},
        {
          name:'Pants',
          nodeId:'1048184'},
        {
          name:'Skirts',
          nodeId:'1045022'},
        {
          name:'Shorts',
          nodeId:'1048186'},
        {
          name:'Leggings',
          nodeId:'1258967011'},
        {
          name:'Active',
          nodeId:'3456051'},
        {
          name:'Swimsuits & Cover Ups',
          nodeId:'1046622'},
        {
          name:'Lingerie, Sleep & Lounge',
          nodeId:'9522931011'},
        {
          name:'Jumpsuits, Rompers & Overalls',
          nodeId:'9522930011'},
        {
          name:'Coats, Jackets & Vests',
          nodeId:'1044646'},
        {
          name:'Suiting & Blazers',
          nodeId:'9522932011'},
        {
          name:'Socks & Hosiery',
          nodeId:'1044886'}
      ]
    },
    {
      depth: 6,
      label: '06',
      selected: null,
      nodes: [
        // {
        //   name:'Blouses & Button-Down Shirts',
        //   nodeId:'2368365011'},
        // {
        //   name:'Henleys',
        //   nodeId:'5418124011'},
        // {
        //   name:'Knits & Tees',
        //   nodeId:'1044544'},
        // {
        //   name:'Polos',
        //   nodeId:'1044548'},
        // {
        //   name:'Tanks & Camis',
        //   nodeId:'2368344011'},
        // {
        //   name:'Tunics',
        //   nodeId:'5418125011'},
        // {
        //   name:'Vests',
        //   nodeId:'5418126011'}
      ]
    },
    {
      depth: 7,
      label: '07',
      selected: null, // { nodeId: '' },
      nodes: []
    },
    {
      depth: 8,
      label: '08',
      selected: null, // { nodeId: '' },
      nodes: []
    }
  ]
}

const mutations = {
  UPDATE_CATEGORY (state, cateItem) {
    for (let i = 0; i < state.items.length; i++) {
      if (cateItem.cate.depth === state.items[i].depth) {
        state.items[i].selected = cateItem.node
      }
      if (cateItem.cate.depth < state.items[i].depth) {
        state.items[i].selected = null
        state.items[i].nodes = []
        if (cateItem.cate.depth + 1 === state.items[i].depth) {
          for (let j = 0; j < cateItem.children.length; j++) {
            let aNode = {}
            aNode.nodeId = cateItem.children[j].node_id
            aNode.name = cateItem.children[j].name
            state.items[i].nodes.push(aNode)
          }
        }
      }
    }
  }
}

const getters = {
  categories: state => state.items
}

export default {
  state,
  mutations,
  getters
}
