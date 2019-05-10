require([
    "jquery",
    "Magento_Ui/js/modal/confirm",
    "mage/translate",
], function(jQuery, confirmation, $t) {
//confirmation for removing category/product URL rewrites
    jQuery('select.generate_category_product_rewrites').on('change', function (event) {
        if (this.value == 0) {
            confirmation({
                title: $t('Turn off "category/products" URL rewrites?'),
                content: $t('Turning off automatic generation of "category/products" URL rewrites will result in permanent removal of all the currently existing “category/product” type URL rewrites without an ability to restore them back. ' +
                    'This may potentially cause unresolved “category/product” type URL conflicts which you have to resolve by updating URL key manually.'),
                actions: {
                    cancel: function () {
                        jQuery('select.generate_category_product_rewrites').val(1);
                        return false;
                    },
                }
            })
        }
    });
});