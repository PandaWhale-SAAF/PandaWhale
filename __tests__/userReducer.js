import subject from '../client/reducers/userReducer.js';

describe('userReducer', () => {
    let state;
    beforeEach(() => {
      state = {
        user_id: '',
      }
    })
    describe('default state', () => {
      it('should return a default state when given an undefined input', () => {
        expect(subject(undefined, { type: undefined})).toEqual(state);
      })
    })
});