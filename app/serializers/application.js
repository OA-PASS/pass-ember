// import ENV from 'pass-ember/config/environment';
// import FedoraJsonLdSerializer from './fedora-jsonld';
//
// export default FedoraJsonLdSerializer.extend({
//   contextURI: ENV.fedora.context,
//   dataURI: ENV.fedora.data
// });
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({});
