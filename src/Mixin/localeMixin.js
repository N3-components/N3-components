import locale from '../Locale/index'

export default (name) => {
    return {
        methods: {
            getL(key) {
                console.log(locale[name][key])
                return locale[name][key][this.locale]
            }   
        }
    }
};