import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';

import { ProfileMenu } from '@site/src/user/ProfileMenu';

/** Registers custom navbar item types, used in docusaurus.config.ts as `type: 'custom-...'`. */
export default {
  ...ComponentTypes,
  'custom-profile': ProfileMenu,
};
