
class mobile_automation {
    get welcome () {
        return $('[id=com.fghilmany.dietmealapp:id/header_welcome]');
    }
    get inputName () {
        return $('//*[@com.fghilmany.dietmealapp:id/et_name"]');
    }

    get inputWeight () {
        return $('//*[@com.fghilmany.dietmealapp:id/et_weight"]');
    }
    get inputHeight () {
        return $('//*[@com.fghilmany.dietmealapp:id/et_height"]');
    }
    get selectGender () {
        return $('//*[@com.fghilmany.dietmealapp:id/rb_female');
    }
    get selectOneActivity () {
        return $('//*[@com.fghilmany.dietmealapp:id/rb_rest"]');
    }
    get btnFinish () {
        return $('//*[@com.fghilmany.dietmealapp:id/bt_finish');
    }
    get errorEmpty () {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup');
    }
    async inputDataDietMeal () {
        await this.inputName.setValue(fais);
        await this.inputWeight.setValue(50);
        await this.inputHeight.setValue(155);
        // await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('mobile.automation');
    }
}

export default new mobile_automation ();
