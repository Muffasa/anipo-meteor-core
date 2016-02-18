import 'collections/organizations';
import './organizations';
import 'collections/files';
import {loadOrganizations} from './load-organizations';
import './methods';

Meteor.startup(loadOrganizations);