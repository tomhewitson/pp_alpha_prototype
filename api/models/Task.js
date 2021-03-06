'use strict'

const Model = require('trails-model')

/**
 * @module Task
 * @description Service Task
 */
module.exports = class Task extends Model {

  static config () {
  }

  static schema () {
    return {
      friendly_id: {
        type: 'string'
      },
      name: {
        type: 'string'
      },
      description: {
        type: 'text'
      },
      user_need: {
        type: 'text'
      },
      url: {
        type: 'string' // use for Start page URL or landing page
      },
      // associations
      task_volume_records: {
        collection: 'TaskVolumeRecord',
        via: 'task'
      },
      agency: {
        model: 'Agency'
      },
      department: {
        model: 'Department'
      }
    }
  }
}
