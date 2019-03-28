
const locations = {
  state: {
    locations:{
      'kyiv': {
        city: 'Kyiv',
        company: 'Global Message Services Ukraine LLC',
        street: 'Kiyv, Stepan Bandera',
        postIndex: '03046',
        country: 'Ukraine',
        position: {
          lat: 48.174270,
          lng: 16.329620,
        }
      },
      'newyork': {
        city: 'New York',
        company: 'Global Message Services American LLC',
        street: 'New York, Stepan Bandera',
        postIndex: '04569',
        country: 'USA',
        position: {
          lat: 8.174270,
          lng: 46.329620,
        }
      },
      'barcelona': {
        city: 'Barcelona',
        company: 'Global Message Services Spain LLC',
        street: 'Barcelona, Stepan Bandera',
        postIndex: '87978',
        country: 'Spain',
        position: {
          lat: 48.174270,
          lng: 116.329620,
        }
      },
      'guangzhou': {
        city: 'Guangzhou',
        company: 'Global Message Services China LLC',
        street: 'Guangzhou, Stepan Bandera',
        postIndex: '56667',
        country: 'China',
        position: {
          lat: 58.174270,
          lng: 71.329620,
        }
      }
    },
  },
  getters: {
    locations: state => state.locations,
  },
}
