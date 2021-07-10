!(function ($, window) {
  var TEXT = {
    default: '复制',
    success: '复制成功',
    fail: '复制失败',
  };

  /**
   * 复制文本
   * @param {HTMLElement} selectNode 需要复制的元素
   * @param {*} copyBtnInstance 复制按钮的实例
   */
  function copyText(selectNode, copyBtnInstance) {
    try {
      var range = document.createRange();
      range.selectNode(selectNode);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      copyBtnInstance.changeStatus(1);
    } catch (e) {
      copyBtnInstance.changeStatus(0);
    }
  }

  /**
   * 生成复制按钮
   * @param {number} top 按钮距离页面顶部的值
   * @param {number} right
   */
  function GenCopyBtn(top, right) {
    this.el = document.createElement('span');
    this.el.innerText = TEXT.default;
    this.el.setAttribute('class', 'copy-btn');
    this.el.style.top = top + 'px';
    this.el.style.right = right + 'px';
  }

  GenCopyBtn.prototype = {
    getEl: function () {
      return this.el;
    },
    changeStatus: function (status) {
      this.el.innerText = TEXT.success;
      if (!status) {
        this.el.innerText = TEXT.fail;
        this.el.style.color = '#dd524d';
      }
      this.reset(800);
    },
    reset: function (delay) {
      var _this = this;
      setTimeout(function () {
        _this.el.innerText = TEXT.default;
        _this.el.style.color = '';
      }, delay)
    },
  }

  var MARGIN = 10; // 距离代码块的边距
  var highlights = $('.highlight');

  // 没有该元素就不生成按钮
  if (!highlights || !highlights.length) {
    return false;
  }

  var nodeFragment = document.createDocumentFragment();
  var mainSelector = '.content';

  /**
   * 获取按钮的 top 值
   * @param {HTMLElement} highlightEl 
   */
  function getCopyBtnPosY(highlightEl) {
    var top = $(highlightEl).offset().top;
    return top;
  }

  /**
   * 获取按钮的 right 值
   * @param {HTMLElement} highlightEl 
   */
  function getCopyBtnPosX(highlightEl) {
    var right = $(mainSelector).width() - highlightEl.outerWidth(true) - highlightEl.offset().left;
    return right;
  }

  /**
   * 窗口调整后 重新设置 按钮位置
   */
  function onResize() {
    var copyBtn = $('.copy-btn');
    if(!copyBtn.length) return;

    copyBtn.each(function(index) {
      var highlightEl = $(highlights[index]);
      var offsetTop = getCopyBtnPosY(highlightEl) + MARGIN;
      var offsetRight = getCopyBtnPosX(highlightEl) + MARGIN;
      $(this).css({
        top: offsetTop,
        right: offsetRight
      });
    })
  }

  /**
   * 添加 按钮
   */
  function renderBtn() {
    highlights.each(function () {
      var highlightEl = $(this);
      var offsetTop = getCopyBtnPosY(highlightEl) + MARGIN;
      var offsetRight = getCopyBtnPosX(highlightEl) + MARGIN;

      var codeEl = highlightEl.find('.code pre')[0];

      var copyBtnInstance = new GenCopyBtn(offsetTop, offsetRight);
      var copyBtnEl = copyBtnInstance.getEl();
      copyBtnEl.addEventListener(
        'click',
        copyText.bind(this, codeEl, copyBtnInstance)
      )

      nodeFragment.appendChild(copyBtnEl);
    })

    $(mainSelector).append(nodeFragment);
  }
  
  function onLoad() {
    renderBtn()
  }

  window.addEventListener('load', onLoad)
  window.addEventListener('resize', onResize);
  
})(jQuery, window)
