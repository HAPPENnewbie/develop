// pages/helpcenter/helpcenter.js
Page({
  data: {
    tagList: ['标签1', '标签2', '标签3', '标签4'],
    selectedTagIndex: -1
  },
  selectTag(e) {
    const index = e.currentTarget.dataset.index;
    console.log(index);
    this.setData({
      selectedTagIndex: index
    });

  },
  isSelected(index) {
    return index === this.data.selectedTagIndex;
  }
});


