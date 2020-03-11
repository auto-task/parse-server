"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = exports.GLOBAL_ID_ATT = void 0;

var _graphqlRelay = require("graphql-relay");

var _graphqlListFields = _interopRequireDefault(require("graphql-list-fields"));

var defaultGraphQLTypes = _interopRequireWildcard(require("./defaultGraphQLTypes"));

var objectsQueries = _interopRequireWildcard(require("../helpers/objectsQueries"));

var _parseClassTypes = require("./parseClassTypes");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const GLOBAL_ID_ATT = {
  description: 'This is the global id.',
  type: defaultGraphQLTypes.OBJECT_ID
};
exports.GLOBAL_ID_ATT = GLOBAL_ID_ATT;

const load = parseGraphQLSchema => {
  const {
    nodeInterface,
    nodeField
  } = (0, _graphqlRelay.nodeDefinitions)(async (globalId, context, queryInfo) => {
    try {
      const {
        type,
        id
      } = (0, _graphqlRelay.fromGlobalId)(globalId);
      const {
        config,
        auth,
        info
      } = context;
      const selectedFields = (0, _graphqlListFields.default)(queryInfo);
      const {
        keys,
        include
      } = (0, _parseClassTypes.extractKeysAndInclude)(selectedFields);
      return _objectSpread({
        className: type
      }, (await objectsQueries.getObject(type, id, keys, include, undefined, undefined, config, auth, info, parseGraphQLSchema.parseClasses.find(({
        className
      }) => type === className))));
    } catch (e) {
      parseGraphQLSchema.handleError(e);
    }
  }, obj => {
    return parseGraphQLSchema.parseClassTypes[obj.className].classGraphQLOutputType;
  });
  parseGraphQLSchema.addGraphQLType(nodeInterface, true);
  parseGraphQLSchema.relayNodeInterface = nodeInterface;
  parseGraphQLSchema.addGraphQLQuery('node', nodeField, true);
};

exports.load = load;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HcmFwaFFML2xvYWRlcnMvZGVmYXVsdFJlbGF5U2NoZW1hLmpzIl0sIm5hbWVzIjpbIkdMT0JBTF9JRF9BVFQiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJkZWZhdWx0R3JhcGhRTFR5cGVzIiwiT0JKRUNUX0lEIiwibG9hZCIsInBhcnNlR3JhcGhRTFNjaGVtYSIsIm5vZGVJbnRlcmZhY2UiLCJub2RlRmllbGQiLCJnbG9iYWxJZCIsImNvbnRleHQiLCJxdWVyeUluZm8iLCJpZCIsImNvbmZpZyIsImF1dGgiLCJpbmZvIiwic2VsZWN0ZWRGaWVsZHMiLCJrZXlzIiwiaW5jbHVkZSIsImNsYXNzTmFtZSIsIm9iamVjdHNRdWVyaWVzIiwiZ2V0T2JqZWN0IiwidW5kZWZpbmVkIiwicGFyc2VDbGFzc2VzIiwiZmluZCIsImUiLCJoYW5kbGVFcnJvciIsIm9iaiIsInBhcnNlQ2xhc3NUeXBlcyIsImNsYXNzR3JhcGhRTE91dHB1dFR5cGUiLCJhZGRHcmFwaFFMVHlwZSIsInJlbGF5Tm9kZUludGVyZmFjZSIsImFkZEdyYXBoUUxRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLGFBQWEsR0FBRztBQUNwQkMsRUFBQUEsV0FBVyxFQUFFLHdCQURPO0FBRXBCQyxFQUFBQSxJQUFJLEVBQUVDLG1CQUFtQixDQUFDQztBQUZOLENBQXRCOzs7QUFLQSxNQUFNQyxJQUFJLEdBQUdDLGtCQUFrQixJQUFJO0FBQ2pDLFFBQU07QUFBRUMsSUFBQUEsYUFBRjtBQUFpQkMsSUFBQUE7QUFBakIsTUFBK0IsbUNBQ25DLE9BQU9DLFFBQVAsRUFBaUJDLE9BQWpCLEVBQTBCQyxTQUExQixLQUF3QztBQUN0QyxRQUFJO0FBQ0YsWUFBTTtBQUFFVCxRQUFBQSxJQUFGO0FBQVFVLFFBQUFBO0FBQVIsVUFBZSxnQ0FBYUgsUUFBYixDQUFyQjtBQUNBLFlBQU07QUFBRUksUUFBQUEsTUFBRjtBQUFVQyxRQUFBQSxJQUFWO0FBQWdCQyxRQUFBQTtBQUFoQixVQUF5QkwsT0FBL0I7QUFDQSxZQUFNTSxjQUFjLEdBQUcsZ0NBQWNMLFNBQWQsQ0FBdkI7QUFFQSxZQUFNO0FBQUVNLFFBQUFBLElBQUY7QUFBUUMsUUFBQUE7QUFBUixVQUFvQiw0Q0FBc0JGLGNBQXRCLENBQTFCO0FBRUE7QUFDRUcsUUFBQUEsU0FBUyxFQUFFakI7QUFEYixVQUVNLE1BQU1rQixjQUFjLENBQUNDLFNBQWYsQ0FDUm5CLElBRFEsRUFFUlUsRUFGUSxFQUdSSyxJQUhRLEVBSVJDLE9BSlEsRUFLUkksU0FMUSxFQU1SQSxTQU5RLEVBT1JULE1BUFEsRUFRUkMsSUFSUSxFQVNSQyxJQVRRLEVBVVJULGtCQUFrQixDQUFDaUIsWUFBbkIsQ0FBZ0NDLElBQWhDLENBQ0UsQ0FBQztBQUFFTCxRQUFBQTtBQUFGLE9BQUQsS0FBbUJqQixJQUFJLEtBQUtpQixTQUQ5QixDQVZRLENBRlo7QUFpQkQsS0F4QkQsQ0F3QkUsT0FBT00sQ0FBUCxFQUFVO0FBQ1ZuQixNQUFBQSxrQkFBa0IsQ0FBQ29CLFdBQW5CLENBQStCRCxDQUEvQjtBQUNEO0FBQ0YsR0E3QmtDLEVBOEJuQ0UsR0FBRyxJQUFJO0FBQ0wsV0FBT3JCLGtCQUFrQixDQUFDc0IsZUFBbkIsQ0FBbUNELEdBQUcsQ0FBQ1IsU0FBdkMsRUFDSlUsc0JBREg7QUFFRCxHQWpDa0MsQ0FBckM7QUFvQ0F2QixFQUFBQSxrQkFBa0IsQ0FBQ3dCLGNBQW5CLENBQWtDdkIsYUFBbEMsRUFBaUQsSUFBakQ7QUFDQUQsRUFBQUEsa0JBQWtCLENBQUN5QixrQkFBbkIsR0FBd0N4QixhQUF4QztBQUNBRCxFQUFBQSxrQkFBa0IsQ0FBQzBCLGVBQW5CLENBQW1DLE1BQW5DLEVBQTJDeEIsU0FBM0MsRUFBc0QsSUFBdEQ7QUFDRCxDQXhDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vZGVEZWZpbml0aW9ucywgZnJvbUdsb2JhbElkIH0gZnJvbSAnZ3JhcGhxbC1yZWxheSc7XG5pbXBvcnQgZ2V0RmllbGROYW1lcyBmcm9tICdncmFwaHFsLWxpc3QtZmllbGRzJztcbmltcG9ydCAqIGFzIGRlZmF1bHRHcmFwaFFMVHlwZXMgZnJvbSAnLi9kZWZhdWx0R3JhcGhRTFR5cGVzJztcbmltcG9ydCAqIGFzIG9iamVjdHNRdWVyaWVzIGZyb20gJy4uL2hlbHBlcnMvb2JqZWN0c1F1ZXJpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEtleXNBbmRJbmNsdWRlIH0gZnJvbSAnLi9wYXJzZUNsYXNzVHlwZXMnO1xuXG5jb25zdCBHTE9CQUxfSURfQVRUID0ge1xuICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGdsb2JhbCBpZC4nLFxuICB0eXBlOiBkZWZhdWx0R3JhcGhRTFR5cGVzLk9CSkVDVF9JRCxcbn07XG5cbmNvbnN0IGxvYWQgPSBwYXJzZUdyYXBoUUxTY2hlbWEgPT4ge1xuICBjb25zdCB7IG5vZGVJbnRlcmZhY2UsIG5vZGVGaWVsZCB9ID0gbm9kZURlZmluaXRpb25zKFxuICAgIGFzeW5jIChnbG9iYWxJZCwgY29udGV4dCwgcXVlcnlJbmZvKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIGlkIH0gPSBmcm9tR2xvYmFsSWQoZ2xvYmFsSWQpO1xuICAgICAgICBjb25zdCB7IGNvbmZpZywgYXV0aCwgaW5mbyB9ID0gY29udGV4dDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRGaWVsZHMgPSBnZXRGaWVsZE5hbWVzKHF1ZXJ5SW5mbyk7XG5cbiAgICAgICAgY29uc3QgeyBrZXlzLCBpbmNsdWRlIH0gPSBleHRyYWN0S2V5c0FuZEluY2x1ZGUoc2VsZWN0ZWRGaWVsZHMpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0eXBlLFxuICAgICAgICAgIC4uLihhd2FpdCBvYmplY3RzUXVlcmllcy5nZXRPYmplY3QoXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBrZXlzLFxuICAgICAgICAgICAgaW5jbHVkZSxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgIGF1dGgsXG4gICAgICAgICAgICBpbmZvLFxuICAgICAgICAgICAgcGFyc2VHcmFwaFFMU2NoZW1hLnBhcnNlQ2xhc3Nlcy5maW5kKFxuICAgICAgICAgICAgICAoeyBjbGFzc05hbWUgfSkgPT4gdHlwZSA9PT0gY2xhc3NOYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSksXG4gICAgICAgIH07XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHBhcnNlR3JhcGhRTFNjaGVtYS5oYW5kbGVFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9iaiA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VHcmFwaFFMU2NoZW1hLnBhcnNlQ2xhc3NUeXBlc1tvYmouY2xhc3NOYW1lXVxuICAgICAgICAuY2xhc3NHcmFwaFFMT3V0cHV0VHlwZTtcbiAgICB9XG4gICk7XG5cbiAgcGFyc2VHcmFwaFFMU2NoZW1hLmFkZEdyYXBoUUxUeXBlKG5vZGVJbnRlcmZhY2UsIHRydWUpO1xuICBwYXJzZUdyYXBoUUxTY2hlbWEucmVsYXlOb2RlSW50ZXJmYWNlID0gbm9kZUludGVyZmFjZTtcbiAgcGFyc2VHcmFwaFFMU2NoZW1hLmFkZEdyYXBoUUxRdWVyeSgnbm9kZScsIG5vZGVGaWVsZCwgdHJ1ZSk7XG59O1xuXG5leHBvcnQgeyBHTE9CQUxfSURfQVRULCBsb2FkIH07XG4iXX0=