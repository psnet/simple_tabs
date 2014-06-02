/**
 * Simple Tabs jQuery plugin
 *
 * @copyright Serge Pustovit (PSNet), 2008 - 2014
 * @author    Serge Pustovit (PSNet) <light.feel@gmail.com>
 *
 * @link      http://psnet.lookformp3.net
 * @link      https://github.com/psnet/simple_tabs
 */

/**
 *
 * Плагин для простого создания вкладок
 *
 * Вкладка должна содержать класс "js-simple-tab" и атрибуты "data-tab-group" и "data-tab-id".
 *
 * Контейнер, связанный с вкладкой, должен иметь класс "js-simple-tab-content" и также содержать атрибуты "data-tab-group" и "data-tab-id" с теми же значениями что и его вкладка.
 *
 * Открытая вкладка по-умолчанию должна содержать класс "active", контент этой вкладки должен быть видимым. Остальной контент других вкладок должен быть скрыт средствами CSS.
 *
 */

var simple_tabs = (function ($) {

	/**
	 * Селекторы
	 */
	this.selectors = {
		/**
		 * Вкладка
		 */
		tab: '.js-simple-tab',
		/**
		 * Контейнер для вкладки
		 */
		tab_content: '.js-simple-tab-content',
		/**
		 * Активная вкладка
		 */
		active: 'active',


		/**
		 * Последний элемент без запятой
		 */
		last_element_wo_comma: true
	};

	/**
	 * Атрибуты
	 */
	this.data_attr = {
		/**
		 * Группа вкладок (для возможности размещать на странице несколько разных групп вкладок даже если у них пересекаются ид)
		 */
		tab_group: 'data-tab-group',
		/**
		 * Ид вкладки
		 */
		tab_id: 'data-tab-id',


		/**
		 * Последний элемент без запятой
		 */
		last_element_wo_comma: true
	};


	/**
	 * Установить слушатель переключения вкладок
	 *
	 * @constructor
	 */
	this.AssignListenersForTabs = function() {
		$ (document).on('click.simple_tabs', this.selectors.tab, function () {
			var sGroup = $ (this).attr(simple_tabs.data_attr.tab_group);
			var iLinkedContentId = $ (this).attr(simple_tabs.data_attr.tab_id);
			/**
			 * Если активна текущая вкладка - не переключать
			 */
			if ($ (this).hasClass(simple_tabs.selectors.active)) return false;
			/**
			 * Обновить классы у вкладок
			 */
			$ (simple_tabs.selectors.tab + '[' + simple_tabs.data_attr.tab_group + '="' + sGroup + '"]').removeClass(simple_tabs.selectors.active);
			$ (this).addClass(simple_tabs.selectors.active);
			/**
			 * Переключить содержимое
			 */
			$ (simple_tabs.selectors.tab_content + '[' + simple_tabs.data_attr.tab_group + '="' + sGroup + '"]').toggle(false);
			$ (simple_tabs.selectors.tab_content + '[' + simple_tabs.data_attr.tab_group + '="' + sGroup + '"][' + simple_tabs.data_attr.tab_id + '="' + iLinkedContentId + '"]').toggle(true);
			return false;
		});
	};

	// ---

	return this;
	
}).call (simple_tabs || {}, jQuery);

// ---

jQuery (document).ready (function ($) {

	/**
	 * Установить слушатель переключения вкладок
	 */
	simple_tabs.AssignListenersForTabs();

});
