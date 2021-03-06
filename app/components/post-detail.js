import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if(confirm('Are you sure you want to delete this post?')) {
        this.sendAction('deletePost', post);
      }
    },
    update(post) {
      this.sendAction('update', post);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    }
  }
});
