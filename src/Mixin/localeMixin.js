import locale from '../Locale/index'

export default (name) => {
    return {
        methods: {
            getL(key) {
                return locale[name][key][this.n3Locale || window.n3Locale || 'zh']
            }   
        }
    }
};