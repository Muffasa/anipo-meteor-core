import 'collections/organizations';
import './organizations';
import {loadOrganizations} from './load-organizations'

Meteor.startup(loadOrganizations);