import expect from 'expect';
import deepFreeze from 'deep-freeze-es6';
import noobReducer from './root';


describe('Root Reducer', () => {
  let stateBefore = [];
  let stateAfter = [];
  let action = {};
  it('should do nothing', () => {
    stateBefore = [];
    stateAfter = [];
    action = {
      type: "FAKE_ACTION"
    };

    deepFreeze(stateBefore);

    expect(noobReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
