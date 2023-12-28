module.exports = {
	"parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "script",
		"ecmaFeatures": {
			"globalReturn": true
		}
	},
	"rules": {
		'generator-star-spacing': 'off',
		'require-yield': 'off',
		"indent": ["error", "tab"],
		"new-cap": ["error", {
			"newIsCap": false,
			"capIsNew": false
		}],
		"no-undef": 'off',
		"no-shadow": ["error", {
			"builtinGlobals": false,
			"hoist": "functions",
			"allow": []
		}],
		"template-curly-spacing": ["error", "never"],
		"key-spacing": 'off',
		"quotes": 'off',
		"comma-dangle": 'off',
		"no-trailing-spaces": ["error", {
			"skipBlankLines": true
		}],
		"object-curly-spacing": ["error", "always"],
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never",
			"asyncArrow": "always"
		}],
		"no-unused-vars": 'off',
		"handle-callback-err": 'off',
	},
};
