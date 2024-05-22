  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useQueueStore = exports.useQueue = undefined;
  var useQueueStore = exports.useQueueStore = (0, _$$_REQUIRE(_dependencyMap[0]).create)()(function (set) {
    return {
      activeQueueId: null,
      setActiveQueueId: function setActiveQueueId(id) {
        return set({
          activeQueueId: id
        });
      }
    };
  });
  var useQueue = exports.useQueue = function useQueue() {
    return useQueueStore(function (state) {
      return state;
    });
  };
