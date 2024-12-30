
//desculpe deus...


module.exports = function (name, key) {
    var resource;
    switch (key) {
        case 'show':
          resource = 'read';
          break;
        case 'list':
          resource = 'read';
          break;
        case 'edit':
          resource = 'update';
          break;
        case 'update':
          resource = 'update';
          break;
        case 'delete':
          resource = 'delete';
          break;
        case 'create':
          resource = 'write';
          break;
        case 'index':
          resource = 'read';
          url = '/';
          break;
        default:
          throw new Error('Rota Desconhecida: ' + name + '.' + key);
      }
    return  function (req, res, next) {
        req.resource = name + '.' + resource
        next()
    }
 };