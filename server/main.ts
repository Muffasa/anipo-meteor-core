import 'collections/organizations';
import './organizations';
import {loadOrganizations} from './load-organizations';
import './methods';

Meteor.startup(loadOrganizations);