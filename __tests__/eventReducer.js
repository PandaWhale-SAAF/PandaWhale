import subject from '../client/reducers/eventReducer.js';

describe('eventReducer', () => {
  let state;

  beforeEach(() => {
    state = {

    sortType: 'title',
    data: [],
    title: '', 
    date: '',
    startTime: '',
    endTime: '',
    activityType: '',
    numParticipants: '',
    participants: '',
    location: '',
    host: '',
    zip: ''
    }
  })

  describe('default state', () => {
    it('should return the default state', () => {
      expect(subject(undefined, {type: undefined})).toEqual(state);
    })
  })

})