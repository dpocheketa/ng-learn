'use strict';

/**
 * @ngdoc service
 * @name lesson1App.games
 * @description
 * # games
 * Factory in the lesson1App.
 */
angular.module('lesson1App')
  .factory('games', ['$q', '$resource', 'uuid4', 'lodash', function ($q, $resource, uuid4, lodash) {
    // var gamesResource = $resource('./games.json', {query: {method: 'GET', isArray: true}});
    console.log("Games Service");
    var items = [
      {
        "id": "9b0824ff-f789-47bd-bd5b-a683ad4530ba",
        "title": "WarCraft",
        "url": "http://www.google.com.ua/imgres?imgurl=http://static.giantbomb.com/uploads/original/0/1468/184087-starcraft.png&imgrefurl=http://www.giantbomb.com/starcraft/3025-326/&h=194&w=259&tbnid=sFChtm2ll1DqEM:&zoom=1&tbnh=150&tbnw=200&usg=__ATJgSHoamfJTSNQ1pWrgVw-KiMM=&docid=2bZTEdl6-1-pgM&itg=1",
        "version": "1.0"
      },
      {
        "id": "1184e327-7bff-4360-b61f-ede819697edc",
        "title": "StarCraft",
        "url": "data:image/jpeg;base64,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",
        "version": "1.2"
      }
    ];

    return {
      createNew: function () {
        return {
          id: uuid4.generate(),
          title: '',
          url: '',
          version: '1.0'
        }
      },
      save: function (item) {
        var result = $q.defer();
        if (lodash.find(items, {id: item.id}) || !uuid4.validate(item.id)) {
          result.reject({
            result: 'error',
            code: 409,
            details: 'Conflicting ID'
          });
        } else {
          items.push(item);
          result.resolve({
            result: 'OK',
            data: item
          });
        }
        return result.promise;
      },
      getById: function (id) {
        var result = $q.defer();
        var item = null;
        if (!uuid4.validate(id)) {
          result.reject({
            result: 'error',
            code: 401,
            details: 'Invalid id'
          });
          return result.promise;
        }
        item = lodash.find(items, {id: id});
        if (!item) {
          result.reject({
            result: 'error',
            code: 404,
            details: 'No item with such id'
          });
          return result.promise;
        }
        result.resolve(item);
        return result.promise;
      },
      query: function () {
        var result = $q.defer();
        result.resolve(items);
        return result.promise;
      }
    };
  }]);
