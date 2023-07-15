    $(document).ready(function() {
        $(".content__button_go").on("click", function() {
            $(".content__s_" + $(this).data("step")).slideUp({
                duration: 500,
                start: function() {},
                complete: function() {
                    $(this).removeClass("content__s_active").removeAttr("style")
                }
            }), $(".content__s_" + ($(this).data("step") + 1)).slideDown({
                duration: 500,
                start: function() {},
                complete: function() {
                    $(this).addClass("content__s_active").removeAttr("style")
                }
            })
        });

    });