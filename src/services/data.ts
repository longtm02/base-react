import axiosClient from '.';

export const dataService = {
  get: async () => {
    return await axiosClient.get(
      'https://homefi-admin.savvycom.xyz/api/properties',
      {
        params: {
          'populate': 'deep,10',
          'pagination[limit]': 6,
          'pagination[start]': 0,
          'pagination[withCount]': true,
        },
      },
    );
  },

  getFast: async () => {
    return await axiosClient.get(
      'https://homefi-admin.savvycom.xyz/api/global',
    );
  },
};
