(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8], {
        "/6/X": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES = void 0, t.CASE_SENSITIVE_TAG_NAMES = ["animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"], t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES.reduce((function(e, t) {
                return e[t.toLowerCase()] = t, e
            }), {})
        },
        "/BAW": function(e, t, i) {
            var n = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ArchipelagoAJDSingleArticleQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "postType"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "preview"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "StringOrBoolean"
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "article"
                                },
                                name: {
                                    kind: "Name",
                                    value: "post"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "postName"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "postType"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "postType"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "preview"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "preview"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "content"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subheading"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "details"
                                        },
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "showAuthor"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "authorTagline"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "themeMode"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "writeInAuthor"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "writeInCoAuthor"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "order"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "shortUrl"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "correctionText"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "correctionDate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "updatedDate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "displayPublishDate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "modified_gmt"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "primaryCategoryTerm"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "primaryTagsTermName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "primaryTagsTerm"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "featuredImage"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "itemNumber"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "featuredCaption"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "featuredYoutube"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "featuredDataWrapperIframe"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "socialMediaImage"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "programsDetails"
                                        },
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "source"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "featuredTaxonomy"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "featuredTaxonomyImage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "type"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sourceUrl"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "caption"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "alt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "width"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "height"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "video"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "duration"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "accountId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "playerId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "categories"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "headerName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "homePageEvent"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigation"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "menuItem"
                                                                },
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "displayCustomNavigationOnArticles"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigationBrandingImg"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "internalTaxonomies"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "internalReporting"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "customFields"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "keys"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: [{
                                                    kind: "StringValue",
                                                    value: "hideFeaturedImage",
                                                    block: !1
                                                }]
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "key"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "values"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "midan"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "tags"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "homePageEvent"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigation"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "menuItem"
                                                                },
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "displayCustomNavigationOnArticles"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigationBrandingImg"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "trending"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "where"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigation"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "menuItem"
                                                                },
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "displayCustomNavigationOnArticles"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customNavigationBrandingImg"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "who"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "series"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "relatedArticles"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "excerpt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "date"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "showAuthor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "writeInAuthor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "writeInCoAuthor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "order"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "postType"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "externalUrl"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "content"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "programsDetails"
                                                },
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "video"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "duration"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "featuredImage"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "postAuthorDetails"
                                                },
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "galleryImagesCount"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "moreOnWidgetArticles"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "externalUrl"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "postType"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "replacementHeadline"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "moreOnWidgetCurated"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "explainerWidgetDetails"
                                        },
                                        directives: []
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "longform"
                                        },
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "homePageEvent"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 2537
                    }
                },
                a = {};

            function r(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                }))
            }
            n.definitions = n.definitions.concat(r(i("IdT5").definitions)), n.definitions = n.definitions.concat(r(i("mhoN").definitions)), n.definitions = n.definitions.concat(r(i("k7s9").definitions)), n.definitions = n.definitions.concat(r(i("T2V2").definitions)), n.definitions = n.definitions.concat(r(i("3aDF").definitions)), n.definitions = n.definitions.concat(r(i("6nVt").definitions));
            var o = {};

            function l(e, t) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var n = e.definitions[i];
                    if (n.name && n.name.value == t) return n
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    ! function e(t, i) {
                        if ("FragmentSpread" === t.kind) i.add(t.name.value);
                        else if ("VariableDefinition" === t.kind) {
                            var n = t.type;
                            "NamedType" === n.kind && i.add(n.name.value)
                        }
                        t.selectionSet && t.selectionSet.selections.forEach((function(t) {
                            e(t, i)
                        })), t.variableDefinitions && t.variableDefinitions.forEach((function(t) {
                            e(t, i)
                        })), t.definitions && t.definitions.forEach((function(t) {
                            e(t, i)
                        }))
                    }(e, t), o[e.name.value] = t
                }
            })), e.exports = n, e.exports.ArchipelagoAJDSingleArticleQuery = function(e, t) {
                var i = {
                    kind: e.kind,
                    definitions: [l(e, t)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var n = o[t] || new Set,
                    a = new Set,
                    r = new Set;
                for (n.forEach((function(e) {
                        r.add(e)
                    })); r.size > 0;) {
                    var s = r;
                    r = new Set, s.forEach((function(e) {
                        a.has(e) || (a.add(e), (o[e] || new Set).forEach((function(e) {
                            r.add(e)
                        })))
                    }))
                }
                return a.forEach((function(t) {
                    var n = l(e, t);
                    n && i.definitions.push(n)
                })), i
            }(n, "ArchipelagoAJDSingleArticleQuery")
        },
        "/H+g": function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = (i("VBdi"), i("Ot6i")),
                o = i("MwNz"),
                l = i("pbOP"),
                s = i("TIVh"),
                c = i("Z2pn"),
                d = (i("YWb6"), i("dVLG"));
            const u = e => {
                let {
                    articles: t,
                    className: i
                } = e;
                t = t.slice(0, 4);
                const n = a()("article-related-list", i),
                    u = o.a.get("i18n");
                return t.length > 0 && Object(d.c)("aside", {
                    className: n,
                    id: "article-related",
                    "aria-labelledby": "article-related-title"
                }, Object(d.c)(s.a, {
                    title: u.t("Related"),
                    style: "dot",
                    id: "article-related-title",
                    headingLevel: "h2",
                    className: "u-uppercase"
                }), Object(d.c)("ul", null, t.map((e, t) => Object(d.c)("li", {
                    key: e.id
                }, Object(d.c)(c.a, {
                    article: e,
                    listLayout: !0,
                    className: "gc--list",
                    label: "Related",
                    position: t + 1,
                    analyticsMetaProps: Object(r.d)({
                        recirculationSource: "Related"
                    }),
                    hideFooter: Object(l.b)()
                })))))
            };
            u.defaultProps = {
                articles: []
            }, t.a = u
        },
        "/c3v": function(e, t, i) {},
        "/yMi": function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = (i("VBdi"), i("MwNz")),
                o = i("w8RO"),
                l = (i("T5lE"), i("dVLG"));
            t.a = e => {
                const t = r.a.get("TWITTER_ACCOUNT"),
                    i = r.a.get("i18n"),
                    n = "isCopied" + (Math.floor(9e4 * Math.random()) + 1e4),
                    {
                        url: s,
                        parentClassName: c,
                        socialLinkClassName: d
                    } = e,
                    u = a()("social-share-buttons", c),
                    m = a()("social-share-button", d);
                return Object(l.c)("div", {
                    className: u
                }, Object(l.c)("div", {
                    className: m
                }, Object(l.c)("amp-social-share", {
                    type: "facebook-share",
                    "data-share-endpoint": "https://www.facebook.com/sharer/sharer.php",
                    "data-param-u": s,
                    width: "24",
                    height: "24"
                }, Object(l.c)(o.a, {
                    name: "facebook",
                    color: "social",
                    size: 24
                }))), Object(l.c)("div", {
                    className: m
                }, Object(l.c)("amp-social-share", {
                    type: "twitter",
                    width: "24",
                    height: "24",
                    "data-param-via": t,
                    "data-param-url": s
                }, Object(l.c)(o.a, {
                    name: "twitter",
                    color: "social",
                    size: 24,
                    viewBox: "0 0 26 24"
                }))), Object(l.c)("div", {
                    className: m
                }, Object(l.c)("amp-social-share", {
                    type: "whatsapp",
                    width: "24",
                    height: "24",
                    "data-param-text": s
                }, Object(l.c)(o.a, {
                    name: "whatsapp",
                    color: "social",
                    size: 24
                }))), Object(l.c)("div", {
                    className: m + " copylink",
                    on: `tap:AMP.copy(text='${s}');copy-success:AMP.setState({${n}: !${n}})`,
                    role: "button",
                    tabIndex: 0
                }, Object(l.c)("span", {
                    role: "tooltip",
                    "aria-live": "polite",
                    className: "copylink__tooltip",
                    "data-amp-bind-class": n + " ? 'copylink__tooltip copylink__tooltip-visible' : ''"
                }, i.t("Link copied")), Object(l.c)(o.a, {
                    name: "copylink",
                    color: "social",
                    size: 24,
                    title: "copy url",
                    viewBox: "0 0 27 24",
                    label: i.t("Copy Link")
                })))
            }
        },
        "2kS5": function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("VBdi"),
                a = i("pMe7"),
                r = i("iRkj"),
                o = i("GLoN"),
                l = i("FQxg"),
                s = i("AAFT"),
                c = i.n(s),
                d = i("96Qw"),
                u = i("j0/4"),
                m = i("N4w9"),
                p = i("IyZ2"),
                v = i.n(p),
                b = i("1P4M"),
                f = i.n(b),
                h = i("nlM2"),
                g = i("9N7U"),
                k = i("lBH5"),
                y = i("bQAu"),
                O = i("s+3F"),
                N = i("bUZ2"),
                j = i("C9Dh"),
                S = i("RrlQ"),
                w = (i("qOL4"), i("dVLG"));
            const T = e => {
                var t;
                let {
                    postType: i,
                    article: a,
                    isAmp: r,
                    playlist: o
                } = e;
                const s = Object(h.a)(),
                    c = Object(d.useRouteMatch)(),
                    u = Object(n.useContext)(m.b),
                    p = Object(g.getPreviewID)(s),
                    v = !!p,
                    {
                        loading: b,
                        data: j,
                        error: T
                    } = Object(l.b)(f.a, {
                        variables: {
                            name: c.params.postName,
                            postType: i || Object(g.getPostTypeFromParams)(c.params),
                            preview: p
                        },
                        skip: r
                    });
                if (!r) {
                    const e = Object(k.d)({
                        loading: b,
                        error: T,
                        data: j,
                        match: c,
                        location: s
                    });
                    if (e) return e;
                    a = null === j || void 0 === j ? void 0 : j.article
                }
                return ["episode", "video"].includes(null === (t = a) || void 0 === t ? void 0 : t.postType) ? Object(w.c)(O.a, {
                    article: a,
                    hostName: u,
                    isPreview: v,
                    articleColumnSize: 12,
                    className: "container--playlist-page container--video-page container--no-pad",
                    adsConfig: {
                        hideAll: !0
                    }
                }, Object(w.c)(S.a, {
                    article: a,
                    isPlaylistPage: !0,
                    FeaturedComponent: r ? y.a : N.a,
                    isAmp: r,
                    playlistTitle: null === o || void 0 === o ? void 0 : o.title
                })) : null
            };
            var A = e => {
                let {
                    postType: t,
                    isAmp: i,
                    article: n
                } = e;
                const a = c()("container", "container--grid", "container--article", {
                        "container--vertical-padding": !i
                    }),
                    o = Object(r.a)(),
                    {
                        loading: s,
                        data: d
                    } = Object(l.b)(v.a, {
                        variables: {
                            id: parseInt(o) || 0
                        },
                        fetchPolicy: Object(g.getFetchPolicy)()
                    }),
                    m = null === d || void 0 === d ? void 0 : d.playlist;
                return Object(w.c)("div", {
                    className: a
                }, Object(w.c)("div", {
                    className: "container__inner playlist-page"
                }, Object(w.c)("div", {
                    className: "l-col l-col--8"
                }, Object(w.c)(T, {
                    postType: t,
                    article: n,
                    isAmp: i,
                    playlist: m
                })), Object(w.c)("div", {
                    className: "l-col l-col--4"
                }, s ? Object(w.c)(j.a, null) : Object(w.c)(u.a, {
                    isAmp: i,
                    playlist: m
                }))))
            };
            i("T2+i");
            t.default = e => Object(r.a)() ? Object(w.c)(A, e) : (null === e || void 0 === e ? void 0 : e.isAmp) ? Object(w.c)(a.a, e) : Object(w.c)(o.default, e)
        },
        "3lOw": function(e, t, i) {
            "use strict";
            var n = i("VBdi"),
                a = i("MwNz"),
                r = i("khUF"),
                o = i("pbOP"),
                l = i("9N7U"),
                s = (i("XIHV"), i("dVLG"));
            const c = e => {
                let {
                    discoWidgetId: t
                } = e;
                const i = Object(o.b)() ? "aljazeera-rtl" : "aljazeera",
                    [a, c] = Object(r.a)(`https://disco.headliner.link/d/${i}/web/js/widget.js`);
                return Object(n.useEffect)(() => {
                    var e, i;
                    a && (null === (e = window) || void 0 === e || null === (i = e.disco) || void 0 === i || i.render("#disco-widget", {
                        widgetId: t,
                        direction: Object(l.isRTLSite)() ? "rtl" : "ltr"
                    }))
                }, [a]), Object(o.b)() ? null : (c && console.error("failed to retrieve related podcasts"), Object(s.c)("div", {
                    id: "disco-widget"
                }))
            };
            t.a = e => {
                let {
                    article: t,
                    isAmp: i
                } = e;
                if (!t) return null;
                const n = a.a.get("discoWidgetId");
                return n ? Object(s.c)(c, {
                    discoWidgetId: n,
                    article: t
                }) : null
            }
        },
        "3zfc": function(e, t, i) {
            "use strict";
            var n = i("iFHR"),
                a = i.n(n);
            i.d(t, "a", (function() {
                return n.attributesToProps
            })), i.d(t, "c", (function() {
                return n.domToReact
            })), t.b = a.a.default || a.a
        },
        "4gXw": function(e, t, i) {},
        "5jjk": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i("PamH"),
                a = i("G8w2"),
                r = ["checked", "value"],
                o = ["input", "select", "textarea"],
                l = {
                    reset: !0,
                    submit: !0
                };

            function s(e) {
                return n.possibleStandardNames[e]
            }
            t.default = function(e, t) {
                void 0 === e && (e = {});
                var i = {},
                    c = Boolean(e.type && l[e.type]);
                for (var d in e) {
                    var u = e[d];
                    if ((0, n.isCustomAttribute)(d)) i[d] = u;
                    else {
                        var m = d.toLowerCase(),
                            p = s(m);
                        if (p) {
                            var v = (0, n.getPropertyInfo)(p);
                            switch (r.includes(p) && o.includes(t) && !c && (p = s("default" + m)), i[p] = u, v && v.type) {
                                case n.BOOLEAN:
                                    i[p] = !0;
                                    break;
                                case n.OVERLOADED_BOOLEAN:
                                    "" === u && (i[p] = !0)
                            }
                        } else a.PRESERVE_CUSTOM_ATTRIBUTES && (i[d] = u)
                    }
                }
                return (0, a.setStyleProp)(e.style, i), i
            }
        },
        "6gjh": function(e, t, i) {},
        "6xHM": function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = i("VBdi"),
                o = i.n(r),
                l = i("vUkw"),
                s = i.n(l),
                c = i("A81W"),
                d = i("P/sV"),
                u = i("YZKq"),
                m = i("eu73"),
                p = i("ZDfq"),
                v = i("pbOP"),
                b = i("0ne/"),
                f = (i("bgp4"), i("dVLG"));
            t.a = e => {
                let {
                    customBrandingImage: t,
                    customTimerData: i,
                    headerName: n,
                    header: r,
                    classes: l,
                    pageSlug: h,
                    customNavigation: g,
                    termLink: k
                } = e;
                const y = Object(d.a)(),
                    O = [],
                    N = (null === t || void 0 === t ? void 0 : t.landingPage) || (null === t || void 0 === t ? void 0 : t.post),
                    j = {};
                if (N) {
                    var S, w, T;
                    for ((null === (S = N.mobile) || void 0 === S ? void 0 : S.sourceUrl) && O.push(N.mobile.sourceUrl), (null === N || void 0 === N || null === (w = N.desktopRegular) || void 0 === w ? void 0 : w.sourceUrl) && O.push(N.desktopRegular.sourceUrl), (null === N || void 0 === N || null === (T = N.desktop) || void 0 === T ? void 0 : T.sourceUrl) && O.push(N.desktop.sourceUrl); O.length < 3;) O.push(O[O.length - 1]);
                    if (3 === O.length) {
                        [0, 779, 1400].forEach((e, t) => {
                            j[`@media screen and (min-width: ${e}px)`] = {
                                backgroundImage: `url(${O[t]})`
                            }
                        })
                    }
                }
                const A = a()("section-top-branding", l);
                return Object(f.c)(o.a.Fragment, null, Object(f.c)("div", {
                    className: A,
                    css: j
                }, ((e, t, i, n) => {
                    let a = Object(f.c)("div", {
                        className: "section-top-branding__container"
                    }, e && Object(f.c)("h1", {
                        className: "section-top-branding__heading",
                        dangerouslySetInnerHTML: {
                            __html: s()(c.a.t(e), p.summaryHtml)
                        }
                    }), t, (null === i || void 0 === i ? void 0 : i.date) && Object(f.c)("span", {
                        className: "section-top-branding__countdown"
                    }, Object(f.c)(b.a, {
                        targetDate: i.date
                    })));
                    return n && (a = Object(f.c)("a", {
                        href: n,
                        className: "section-top-branding__heading-link"
                    }, a)), a
                })(n, r, i, k)), Object(v.e)() && (() => {
                    var e;
                    if ("qatar-world-cup-2022" === h) return !0;
                    return !!(null === g || void 0 === g || null === (e = g.items) || void 0 === e ? void 0 : e.some(e => "/qatar-world-cup-2022" === e.url))
                })() && Object(f.c)("div", {
                    style: y ? {
                        backgroundImage: `url(${m.a})`,
                        backgroundSize: "auto 100%",
                        height: "20px"
                    } : {
                        backgroundImage: `url(${u.a})`,
                        backgroundSize: "auto 100%",
                        height: "23px"
                    }
                }))
            }
        },
        "72Do": function(e, t, i) {},
        "9oMQ": function(e, t, i) {
            "use strict";
            var n = i("kZWY"),
                a = i("AAFT"),
                r = i.n(a),
                o = (i("VBdi"), i("CkpH")),
                l = i("eKx3"),
                s = i("Wz/t"),
                c = i("18NH"),
                d = i("YSgp"),
                u = i.n(d),
                m = i("9N7U"),
                p = i("dVLG");
            t.a = e => {
                let {
                    match: t
                } = e;
                const {
                    site: i
                } = t.params;
                return "midan" !== i && "blogs" !== i && "videos" !== i ? null : Object(p.c)(n.a, {
                    query: u.a,
                    variables: {
                        name: i
                    },
                    fetchPolicy: Object(m.getFetchPolicy)(),
                    nextFetchPolicy: Object(m.getNextFetchPolicy)(),
                    errorPolicy: Object(m.getErrorPolicy)()
                }, e => {
                    var t, n;
                    let {
                        loading: a,
                        error: d,
                        data: u
                    } = e;
                    const m = null !== (t = null === u || void 0 === u || null === (n = u.menu) || void 0 === n ? void 0 : n[0]) && void 0 !== t ? t : {};
                    if (a && !m.items || d) return null;
                    const v = m.items || [];
                    const b = i,
                        f = r()("container--sub-site", "container--sub-site-" + i);
                    switch (i) {
                        case "midan":
                            return Object(p.c)("div", {
                                className: f
                            }, Object(p.c)(l.a, {
                                menuItems: v
                            }));
                        case "blogs":
                            return Object(p.c)("div", {
                                className: f
                            }, Object(p.c)(o.a, {
                                menuItems: v
                            }))
                    }
                    return Object(p.c)("div", {
                        className: f
                    }, Object(p.c)(s.a, {
                        header: void 0,
                        url: "/" + b,
                        className: "u-horizontally-center"
                    }), Object(p.c)(c.b, {
                        menu: v,
                        classes: ["container__navbar--" + i]
                    }))
                })
            }
        },
        "A+K4": function(e, t, i) {
            "use strict";
            var n = i("gzET"),
                a = i.n(n),
                r = i("VBdi"),
                o = i("N4w9"),
                l = i("xAi6"),
                s = i("Zow2");
            const c = e => {
                let {
                    children: t,
                    isAmp: i
                } = e;
                const n = Object(r.useContext)(o.a),
                    a = Object(s.a)(l.BTF_RENDER_SCROLL_OFFSET);
                if (i || n.isSeoBot) return t;
                let c = !1;
                a && !c && (c = !0);
                return !c && !a ? null : t
            };
            c.propTypes = {
                children: a.a.any,
                isAmp: a.a.bool
            }, t.a = c
        },
        AYes: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = (i("VBdi"), i("8+YW")),
                o = (i("FIGo"), i("dVLG"));
            t.a = e => {
                let {
                    author: {
                        link: t,
                        name: i
                    },
                    isAmp: n,
                    className: l
                } = e;
                const s = a()("author-link", l);
                return n ? Object(o.c)("a", {
                    className: s,
                    href: t
                }, i) : Object(o.c)(r.a, {
                    className: s,
                    to: t,
                    label: "Author Name",
                    eventTarget: i
                }, i)
            }
        },
        BnyI: function(e, t, i) {},
        Bsv4: function(e, t, i) {},
        CQBP: function(e, t, i) {},
        CjPR: function(e, t, i) {
            var n = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "BrandedEventModuleQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "preview"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "StringOrBoolean"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "isAtf"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "atfLength"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "homepage"
                                },
                                name: {
                                    kind: "Name",
                                    value: "homepageAje"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "preview"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "preview"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "brandedEventCollection"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "isAtf"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "isAtf"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "atfLength"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "atfLength"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "uri"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termTitle"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "posts"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "details"
                                                        },
                                                        directives: []
                                                    }, {
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "homePageVideoDetails"
                                                        },
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "replacementHeadline"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customTimerData"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "date"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "customBrandingImage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "desktop"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sourceUrl"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sourceUrl"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "titleBgColor"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "homePageVideoDetails"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Post"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "video"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "duration"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "accountId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "playerId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "featuredYoutube"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "featuredDataWrapperIframe"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "programsDetails"
                                },
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 1029
                    }
                },
                a = {};

            function r(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                }))
            }
            n.definitions = n.definitions.concat(r(i("IdT5").definitions)), n.definitions = n.definitions.concat(r(i("mhoN").definitions));
            var o = {};

            function l(e, t) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var n = e.definitions[i];
                    if (n.name && n.name.value == t) return n
                }
            }

            function s(e, t) {
                var i = {
                    kind: e.kind,
                    definitions: [l(e, t)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var n = o[t] || new Set,
                    a = new Set,
                    r = new Set;
                for (n.forEach((function(e) {
                        r.add(e)
                    })); r.size > 0;) {
                    var s = r;
                    r = new Set, s.forEach((function(e) {
                        a.has(e) || (a.add(e), (o[e] || new Set).forEach((function(e) {
                            r.add(e)
                        })))
                    }))
                }
                return a.forEach((function(t) {
                    var n = l(e, t);
                    n && i.definitions.push(n)
                })), i
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    ! function e(t, i) {
                        if ("FragmentSpread" === t.kind) i.add(t.name.value);
                        else if ("VariableDefinition" === t.kind) {
                            var n = t.type;
                            "NamedType" === n.kind && i.add(n.name.value)
                        }
                        t.selectionSet && t.selectionSet.selections.forEach((function(t) {
                            e(t, i)
                        })), t.variableDefinitions && t.variableDefinitions.forEach((function(t) {
                            e(t, i)
                        })), t.definitions && t.definitions.forEach((function(t) {
                            e(t, i)
                        }))
                    }(e, t), o[e.name.value] = t
                }
            })), e.exports = n, e.exports.BrandedEventModuleQuery = s(n, "BrandedEventModuleQuery"), e.exports.homePageVideoDetails = s(n, "homePageVideoDetails")
        },
        CkpH: function(e, t, i) {
            "use strict";
            var n = i("VBdi"),
                a = i("MwNz"),
                r = i("N4w9"),
                o = i("pbOP"),
                l = i("9N7U"),
                s = i("6xHM"),
                c = i("w8RO"),
                d = i("8+YW"),
                u = i("Wz/t"),
                m = i("18NH"),
                p = (i("rZLu"), i("dVLG"));
            const v = e => {
                let {
                    url: t,
                    title: i
                } = e;
                return t && i ? Object(p.c)("div", {
                    className: "blog-write-button-container"
                }, Object(p.c)(d.a, {
                    to: t,
                    label: "Blogs Menu",
                    eventTarget: i
                }, Object(p.c)(c.a, {
                    name: "edit-icon"
                }), Object(p.c)("p", {
                    className: "blog-write-button-title"
                }, i))) : null
            };
            t.a = e => {
                var t, i, c;
                let {
                    menuItems: d,
                    seoDescription: b,
                    id: f
                } = e;
                const h = Array.isArray(d) && d.length > 0,
                    g = a.a.get("i18n"),
                    k = Object(r.d)(),
                    y = null === (t = k.components.sites) || void 0 === t ? void 0 : t.Blogs,
                    O = b || Object(l.getSectionPageTitle)(a.a.get("i18n").t("blog")),
                    N = h && (null === y || void 0 === y ? void 0 : y.showWriteButton),
                    j = {
                        header: Object(p.c)(n.Fragment, null, (null === y || void 0 === y ? void 0 : y.useLogo) && Object(p.c)(u.a, {
                            header: Object(p.c)("img", {
                                src: y.logo,
                                alt: g.t("Blogs logo"),
                                loading: "lazy"
                            }),
                            url: "/blogs",
                            className: "branding-blogs__image",
                            pageTemplate: "blogs",
                            id: f,
                            title: "Blogs logo"
                        }), N && Object(p.c)(v, {
                            url: d[0].url,
                            title: d[0].title
                        })),
                        classes: ["branding-blogs", {
                            "branding-blogs--aja": Object(o.b)()
                        }]
                    };
                return (null === y || void 0 === y ? void 0 : y.useLogo) || (j.headerName = "blogs"), Object(p.c)(n.Fragment, null, Object(p.c)(s.a, j), !N && Object(p.c)(m.b, {
                    menu: d,
                    defaultTitle: (null === (i = k.components.sites) || void 0 === i || null === (c = i.Blogs) || void 0 === c ? void 0 : c.menuName) || g.t("Blog"),
                    seoMetaDescription: O
                }))
            }
        },
        DGNo: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = i("VBdi"),
                o = i.n(r),
                l = i("MwNz"),
                s = i("WHDo"),
                c = i("QXYw"),
                d = i("DLke"),
                u = i("kXcp"),
                m = i("SVMe"),
                p = i("/yMi"),
                v = i("w8RO"),
                b = i("UMk6"),
                f = i("YXvR"),
                h = (i("WO12"), i("dVLG"));
            const g = e => {
                    let {
                        article: t,
                        url: i,
                        title: n,
                        isClickableCard: o,
                        isDarkMode: p,
                        direction: g,
                        shareIcon: k,
                        onShareToggled: y
                    } = e;
                    const [O, N, j] = Object(s.a)(), S = Object(u.b)(m.j), w = Object(c.a)(), T = Object(d.a)();
                    Object(r.useEffect)(() => {
                        !T && w && (null === y || void 0 === y || y(O))
                    }, [O]);
                    const A = a()("combined-share", {
                            "u-clickable-card__exclude": o,
                            "dark-view": p
                        }),
                        _ = a()("combined-share__links combined-share__links--" + g, {
                            "is-open": O
                        }),
                        x = k || (O ? "share-grey-inverse" : "share-grey"),
                        F = "combined-share__social combined-share__social--" + g;
                    return Object(h.c)("div", {
                        className: A,
                        ref: j
                    }, S && Object(h.c)(b.a, {
                        article: t
                    }), Object(h.c)("div", {
                        className: "combined-share__wrapper"
                    }, Object(h.c)("button", {
                        className: "combined-share__button",
                        onClick: () => N(!O),
                        "aria-pressed": !!O
                    }, Object(h.c)("div", {
                        className: "screen-reader-text"
                    }, l.a.get("i18n").t("Click here to share on social media")), Object(h.c)(v.a, {
                        name: x,
                        size: null,
                        viewBox: "0 0 24 24"
                    })), Object(h.c)("div", {
                        className: _,
                        "data-testid": "share-links"
                    }, Object(h.c)(f.a, {
                        article: t,
                        url: i,
                        title: n,
                        parentClassName: F,
                        socialLinkClassName: "combined-share__social-link " + g,
                        isDarkMode: p,
                        hideSaveButton: !0
                    }))))
                },
                k = e => {
                    let {
                        url: t,
                        title: i,
                        isClickableCard: n,
                        id: r,
                        isDarkMode: o,
                        direction: s
                    } = e;
                    const c = a()("combined-share", {
                            "u-clickable-card__exclude": n,
                            "dark-view": o
                        }),
                        d = "isOpen" + (null !== r && void 0 !== r ? r : Math.floor(9e4 * Math.random()) + 1e4);
                    return Object(h.c)("div", {
                        className: c
                    }, Object(h.c)("div", {
                        className: "combined-share__wrapper"
                    }, Object(h.c)("button", {
                        className: "combined-share__button " + s,
                        on: `tap:AMP.setState({${d}: !${d}})`
                    }, Object(h.c)("div", {
                        className: "screen-reader-text"
                    }, l.a.get("i18n").t("Click here to share on social media")), Object(h.c)("span", {
                        "data-amp-bind-class": d + " ? 'combined-share__hidden' : 'combined-share__visible'"
                    }, Object(h.c)(v.a, {
                        name: "share-grey",
                        viewBox: "0 0 24 24"
                    })), Object(h.c)("span", {
                        className: "combined-share__hidden",
                        "data-amp-bind-class": d + " ? 'combined-share__visible' : 'combined-share__hidden'"
                    }, Object(h.c)(v.a, {
                        name: "share-grey-inverse",
                        viewBox: "0 0 24 24"
                    }))), Object(h.c)("div", {
                        className: `combined-share__links combined-share__links--${s} is-amp`,
                        "data-amp-bind-class": `${d} ? 'combined-share__links is-open combined-share__links--${s} is-amp' : 'combined-share__links combined-share__links--${s} is-amp'`,
                        "data-testid": "share-links"
                    }, Object(h.c)(p.a, {
                        url: t,
                        title: i,
                        parentClassName: "combined-share__social",
                        socialLinkClassName: "combined-share__social-link " + s
                    }))))
                },
                y = e => Object(h.c)(r.Fragment, null, e.isAmp ? Object(h.c)(k, e) : Object(h.c)(g, e));
            y.defaultProps = {
                isAmp: !1,
                isDarkMode: !1,
                direction: "column"
            }, t.a = o.a.memo(y)
        },
        DIDn: function(e, t, i) {
            "use strict";
            var n = i("VBdi"),
                a = i.n(n),
                r = i("N4w9"),
                o = i("QXYw"),
                l = i("9N7U"),
                s = i("DGNo"),
                c = i("YXvR"),
                d = i("dVLG");
            const u = e => {
                let {
                    article: t,
                    combined: i,
                    isAmp: a,
                    isDarkMode: u,
                    direction: m
                } = e;
                const p = Object(n.useContext)(r.b),
                    v = Object(l.getSharableURL)(t, p),
                    b = i ? s.a : c.a,
                    f = Object(o.a)();
                return t && (f || a) ? Object(d.c)(b, {
                    article: t,
                    url: v,
                    title: Object(l.getReplacementHeadline)(t),
                    isAmp: a,
                    id: parseInt(t.id),
                    isDarkMode: u,
                    direction: m
                }) : null
            };
            u.defaultProps = {
                combined: !1,
                isDarkMode: !1,
                direction: "column"
            }, t.a = a.a.memo(u)
        },
        DL6t: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return r
            }));
            var n = i("gzET"),
                a = i.n(n);
            const r = e => {
                let {
                    useHook: t,
                    children: i
                } = e;
                const n = t();
                return "function" === typeof i ? i(n) : i
            };
            r.propTypes = {
                useHook: a.a.func.isRequired,
                children: a.a.func.isRequired
            }
        },
        EQ5g: function(e, t, i) {},
        "F/dt": function(e, t) {
            var i = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = /\n/g,
                a = /^\s*/,
                r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                o = /^:\s*/,
                l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                s = /^[;\s]*/,
                c = /^\s+|\s+$/g;

            function d(e) {
                return e ? e.replace(c, "") : ""
            }
            e.exports = function(e, t) {
                if ("string" !== typeof e) throw new TypeError("First argument must be a string");
                if (!e) return [];
                t = t || {};
                var c = 1,
                    u = 1;

                function m(e) {
                    var t = e.match(n);
                    t && (c += t.length);
                    var i = e.lastIndexOf("\n");
                    u = ~i ? e.length - i : u + e.length
                }

                function p() {
                    var e = {
                        line: c,
                        column: u
                    };
                    return function(t) {
                        return t.position = new v(e), g(), t
                    }
                }

                function v(e) {
                    this.start = e, this.end = {
                        line: c,
                        column: u
                    }, this.source = t.source
                }
                v.prototype.content = e;
                var b = [];

                function f(i) {
                    var n = new Error(t.source + ":" + c + ":" + u + ": " + i);
                    if (n.reason = i, n.filename = t.source, n.line = c, n.column = u, n.source = e, !t.silent) throw n;
                    b.push(n)
                }

                function h(t) {
                    var i = t.exec(e);
                    if (i) {
                        var n = i[0];
                        return m(n), e = e.slice(n.length), i
                    }
                }

                function g() {
                    h(a)
                }

                function k(e) {
                    var t;
                    for (e = e || []; t = y();) !1 !== t && e.push(t);
                    return e
                }

                function y() {
                    var t = p();
                    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                        for (var i = 2;
                            "" != e.charAt(i) && ("*" != e.charAt(i) || "/" != e.charAt(i + 1));) ++i;
                        if (i += 2, "" === e.charAt(i - 1)) return f("End of comment missing");
                        var n = e.slice(2, i - 2);
                        return u += 2, m(n), e = e.slice(i), u += 2, t({
                            type: "comment",
                            comment: n
                        })
                    }
                }

                function O() {
                    var e = p(),
                        t = h(r);
                    if (t) {
                        if (y(), !h(o)) return f("property missing ':'");
                        var n = h(l),
                            a = e({
                                type: "declaration",
                                property: d(t[0].replace(i, "")),
                                value: n ? d(n[0].replace(i, "")) : ""
                            });
                        return h(s), a
                    }
                }
                return g(),
                    function() {
                        var e, t = [];
                        for (k(t); e = O();) !1 !== e && (t.push(e), k(t));
                        return t
                    }()
            }
        },
        F5Rs: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatDOM = t.formatAttributes = void 0;
            var n = i("qylq"),
                a = i("/6/X");

            function r(e) {
                for (var t = {}, i = 0, n = e.length; i < n; i++) {
                    var a = e[i];
                    t[a.name] = a.value
                }
                return t
            }

            function o(e) {
                var t = function(e) {
                    return a.CASE_SENSITIVE_TAG_NAMES_MAP[e]
                }(e = e.toLowerCase());
                return t || e
            }
            t.formatAttributes = r, t.formatDOM = function e(t, i, a) {
                void 0 === i && (i = null);
                for (var l, s = [], c = 0, d = t.length; c < d; c++) {
                    var u = t[c];
                    switch (u.nodeType) {
                        case 1:
                            var m = o(u.nodeName);
                            (l = new n.Element(m, r(u.attributes))).children = e("template" === m ? u.content.childNodes : u.childNodes, l);
                            break;
                        case 3:
                            l = new n.Text(u.nodeValue);
                            break;
                        case 8:
                            l = new n.Comment(u.nodeValue);
                            break;
                        default:
                            continue
                    }
                    var p = s[c - 1] || null;
                    p && (p.next = l), l.parent = i, l.prev = p, l.next = null, s.push(l)
                }
                return a && ((l = new n.ProcessingInstruction(a.substring(0, a.indexOf(" ")).toLowerCase(), a)).next = s[0] || null, l.parent = i, s.unshift(l), s[1] && (s[1].prev = s[0])), s
            }
        },
        FIGo: function(e, t, i) {},
        Fx3t: function(e, t, i) {},
        G8w2: function(e, t, i) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.returnFirstArg = t.canTextBeChildOfNode = t.ELEMENTS_WITH_NO_TEXT_CHILDREN = t.PRESERVE_CUSTOM_ATTRIBUTES = t.setStyleProp = t.isCustomComponent = void 0;
            var a = i("VBdi"),
                r = n(i("XOGc")),
                o = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]);
            t.isCustomComponent = function(e, t) {
                return e.includes("-") ? !o.has(e) : Boolean(t && "string" === typeof t.is)
            };
            var l = {
                reactCompat: !0
            };
            t.setStyleProp = function(e, t) {
                if ("string" === typeof e)
                    if (e.trim()) try {
                        t.style = (0, r.default)(e, l)
                    } catch (i) {
                        t.style = {}
                    } else t.style = {}
            }, t.PRESERVE_CUSTOM_ATTRIBUTES = Number(a.version.split(".")[0]) >= 16, t.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set(["tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset"]);
            t.canTextBeChildOfNode = function(e) {
                return !t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(e.name)
            };
            t.returnFirstArg = function(e) {
                return e
            }
        },
        GLoN: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("VBdi"),
                a = i.n(n),
                r = i("Miz2"),
                o = i("MwNz"),
                l = i("xAi6"),
                s = i("pbOP"),
                c = i("9N7U"),
                d = i("bUZ2"),
                u = i("DIDn"),
                m = i("j6Iu"),
                p = i("fKI+"),
                v = i("bogy"),
                b = i("Xyuu"),
                f = i("trUi"),
                h = i("s+3F"),
                g = i("nDgB"),
                k = (i("KmLg"), i("dVLG"));
            class y extends a.a.Component {
                componentDidMount() {
                    Object(m.b)()
                }
                componentWillUnmount() {
                    Object(m.c)()
                }
                shouldComponentUpdate(e) {
                    return Object(c.hasPostChanged)(this.props, e)
                }
                isAuthorFocusedPostType(e) {
                    return ["opinion", "blog"].includes(e.postType) || Object(s.b)() && !e.displayPublishDate
                }
                renderFeaturedMedia(e) {
                    var t;
                    const i = {
                        article: e
                    };
                    return (null === e || void 0 === e || null === (t = e.video) || void 0 === t ? void 0 : t.id) && (i.hasPlaylist = !1), Object(k.c)(d.a, Object(r.a)({
                        isSinglePage: !0
                    }, i))
                }
                renderHighlightedSection(e, t, i) {
                    return "blogs" === i || this.isAuthorFocusedPostType(e) ? this.renderFeaturedMedia(e) : Object(k.c)(a.a.Fragment, null, this.renderFeaturedMedia(e), Object(k.c)("div", {
                        className: "article-info-block"
                    }, Object(k.c)(v.a, {
                        article: e,
                        showGravatar: !1
                    }), Object(k.c)(u.a, {
                        article: e
                    })))
                }
                render() {
                    const {
                        article: e,
                        hostName: t,
                        isPreview: i,
                        site: n,
                        history: a
                    } = this.props, r = o.a.get("i18n");
                    return Object(k.c)("div", null, Object(k.c)(h.a, {
                        article: e,
                        hostName: t,
                        isPreview: i,
                        hasAdSection: !0
                    }, Object(k.c)("main", {
                        id: l.BYPASS_CONTENT_TYPES.MAIN,
                        tabIndex: "-1",
                        "aria-label": r.t("Main content area")
                    }, Object(k.c)(p.a, null), Object(k.c)(f.a, {
                        article: e
                    }), this.isAuthorFocusedPostType(e) && Object(k.c)("div", {
                        className: "article-info-block opinion-info-block"
                    }, Object(k.c)(v.a, {
                        article: e,
                        showGravatar: !0
                    }), Object(k.c)(u.a, {
                        article: e
                    })), this.renderHighlightedSection(e, t, n), Object(k.c)(g.a, {
                        correctionText: e.correctionText,
                        correctionDate: e.correctionDate
                    }), Object(k.c)(b.a, {
                        article: e,
                        history: a,
                        showArticleSource: !0
                    }))))
                }
            }
            var O = y,
                N = i("96Qw"),
                j = i("zWTB"),
                S = i("9oMQ"),
                w = i("SWuB"),
                T = i("KY5H");
            const A = e => {
                let {
                    article: t
                } = e;
                const i = Object(N.useRouteMatch)();
                return "blog" === t.postType && o.a.get("showBlogArticleNavigation") ? Object(k.c)(S.a, {
                    match: i
                }) : null
            };
            var _ = e => {
                    var t, i, n, a;
                    let {
                        article: r
                    } = e;
                    const l = Object(j.b)(r),
                        s = (null === r || void 0 === r || null === (t = r.sponsorTax) || void 0 === t ? void 0 : t.length) > 0,
                        {
                            isPinningEnabled: d
                        } = Object(c.getStickyNavigationData)(l, s);
                    if (d) return Object(k.c)(j.a, {
                        article: r
                    });
                    const u = "curated_menu" === (null === (i = Object(c.getDynamicValue)("arcSettings")) || void 0 === i ? void 0 : i.articleStickyMenuType),
                        m = null === (n = Object(c.getDynamicValue)("arcSettings")) || void 0 === n ? void 0 : n.articleStickyMenu;
                    if (!u && !m) return null;
                    const p = o.a.get("menuConfig"),
                        {
                            taxonomy: v,
                            terms: b
                        } = null === p || void 0 === p || null === (a = p.curatedMenuConfig) || void 0 === a ? void 0 : a.excludedTaxonomy;
                    return Object(w.a)(r, v, b) ? null : Object(k.c)(T.a, {
                        postType: r.postType,
                        classname: [r.postType],
                        menuSlug: m
                    })
                },
                x = i("6xHM"),
                F = i("BEYP"),
                E = i("ObAp"),
                D = i("pMe7"),
                P = i("JMEX"),
                M = i("q9ob"),
                I = i("j0/4"),
                C = i("/BAW"),
                V = i.n(C),
                L = i("1P4M"),
                R = i.n(L),
                B = i("CiaY"),
                U = i("lBH5");
            t.default = Object(M.a)(e => {
                var t, i, n, a, r, o, l, s;
                const {
                    data: d,
                    postType: u
                } = e, m = u || Object(c.getPostTypeFromParams)(e.match.params), p = null !== (t = null === e || void 0 === e || null === (i = e.staticContext) || void 0 === i ? void 0 : i.actualHost) && void 0 !== t ? t : "", v = e.archipelago.isPreview, b = ["episode", "video"].includes(m) ? D.a : O, f = Object(U.d)(e);
                if (f) return f;
                const {
                    sections: h,
                    authors: g,
                    keywords: y
                } = Object(c.getMetadata)(null === d || void 0 === d ? void 0 : d.article), N = Object(w.d)(null === d || void 0 === d ? void 0 : d.article);
                Object(B.b)({
                    articleID: null === d || void 0 === d || null === (n = d.article) || void 0 === n ? void 0 : n.id,
                    authors: g,
                    category: (null === d || void 0 === d || null === (a = d.article) || void 0 === a ? void 0 : a.categories) && (null === d || void 0 === d || null === (r = d.article) || void 0 === r || null === (o = r.categories[0]) || void 0 === o ? void 0 : o.name),
                    keywords: y,
                    pagetype: "Article Page",
                    sections: h,
                    tags: N
                });
                const j = Object(w.c)(null === d || void 0 === d ? void 0 : d.article, "tags", !1);
                return Object(k.c)(F.a, null, (null === j || void 0 === j || null === (l = j.customArticleBrandingImage) || void 0 === l ? void 0 : l.post) && Object(k.c)(x.a, {
                    customBrandingImage: j.customArticleBrandingImage,
                    customTimerData: j.customTimerArticleData,
                    headerName: j.title,
                    pageSlug: j.slug,
                    termLink: j.link
                }), Object(k.c)(_, {
                    article: null === d || void 0 === d ? void 0 : d.article
                }), Object(k.c)(A, {
                    article: null === d || void 0 === d ? void 0 : d.article
                }), Object(k.c)(P.a, {
                    content: null === d || void 0 === d || null === (s = d.article) || void 0 === s ? void 0 : s.content
                }), Object(k.c)(b, {
                    article: d.article,
                    hostName: p,
                    isPreview: v,
                    moreVideoSectionRender: Object(k.c)(I.b, {
                        article: d.article
                    }),
                    history: e.history
                }), Object(k.c)(E.a, null))
            }, {
                query: Object(s.d)() ? V.a : R.a,
                variables: e => ({
                    name: e.match.params.postName,
                    postType: e.postType || Object(c.getPostTypeFromParams)(e.match.params),
                    preview: e.archipelago.previewID
                })
            })
        },
        GQIZ: function(e, t, i) {
            e.exports = function() {
                "use strict";
                var e = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    t = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                    i = /\d\d/,
                    n = /\d\d?/,
                    a = /\d*[^\s\d-_:/()]+/,
                    r = {},
                    o = function(e) {
                        return (e = +e) + (e > 68 ? 1900 : 2e3)
                    },
                    l = function(e) {
                        return function(t) {
                            this[e] = +t
                        }
                    },
                    s = [/[+-]\d\d:?(\d\d)?|Z/, function(e) {
                        (this.zone || (this.zone = {})).offset = function(e) {
                            if (!e) return 0;
                            if ("Z" === e) return 0;
                            var t = e.match(/([+-]|\d\d)/g),
                                i = 60 * t[1] + (+t[2] || 0);
                            return 0 === i ? 0 : "+" === t[0] ? -i : i
                        }(e)
                    }],
                    c = function(e) {
                        var t = r[e];
                        return t && (t.indexOf ? t : t.s.concat(t.f))
                    },
                    d = function(e, t) {
                        var i, n = r.meridiem;
                        if (n) {
                            for (var a = 1; a <= 24; a += 1)
                                if (e.indexOf(n(a, 0, t)) > -1) {
                                    i = a > 12;
                                    break
                                }
                        } else i = e === (t ? "pm" : "PM");
                        return i
                    },
                    u = {
                        A: [a, function(e) {
                            this.afternoon = d(e, !1)
                        }],
                        a: [a, function(e) {
                            this.afternoon = d(e, !0)
                        }],
                        S: [/\d/, function(e) {
                            this.milliseconds = 100 * +e
                        }],
                        SS: [i, function(e) {
                            this.milliseconds = 10 * +e
                        }],
                        SSS: [/\d{3}/, function(e) {
                            this.milliseconds = +e
                        }],
                        s: [n, l("seconds")],
                        ss: [n, l("seconds")],
                        m: [n, l("minutes")],
                        mm: [n, l("minutes")],
                        H: [n, l("hours")],
                        h: [n, l("hours")],
                        HH: [n, l("hours")],
                        hh: [n, l("hours")],
                        D: [n, l("day")],
                        DD: [i, l("day")],
                        Do: [a, function(e) {
                            var t = r.ordinal,
                                i = e.match(/\d+/);
                            if (this.day = i[0], t)
                                for (var n = 1; n <= 31; n += 1) t(n).replace(/\[|\]/g, "") === e && (this.day = n)
                        }],
                        M: [n, l("month")],
                        MM: [i, l("month")],
                        MMM: [a, function(e) {
                            var t = c("months"),
                                i = (c("monthsShort") || t.map((function(e) {
                                    return e.substr(0, 3)
                                }))).indexOf(e) + 1;
                            if (i < 1) throw new Error;
                            this.month = i % 12 || i
                        }],
                        MMMM: [a, function(e) {
                            var t = c("months").indexOf(e) + 1;
                            if (t < 1) throw new Error;
                            this.month = t % 12 || t
                        }],
                        Y: [/[+-]?\d+/, l("year")],
                        YY: [i, function(e) {
                            this.year = o(e)
                        }],
                        YYYY: [/\d{4}/, l("year")],
                        Z: s,
                        ZZ: s
                    };

                function m(i) {
                    var n, a;
                    n = i, a = r && r.formats;
                    for (var o = (i = n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t, i, n) {
                            var r = n && n.toUpperCase();
                            return i || a[n] || e[n] || a[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, t, i) {
                                return t || i.slice(1)
                            }))
                        }))).match(t), l = o.length, s = 0; s < l; s += 1) {
                        var c = o[s],
                            d = u[c],
                            m = d && d[0],
                            p = d && d[1];
                        o[s] = p ? {
                            regex: m,
                            parser: p
                        } : c.replace(/^\[|\]$/g, "")
                    }
                    return function(e) {
                        for (var t = {}, i = 0, n = 0; i < l; i += 1) {
                            var a = o[i];
                            if ("string" == typeof a) n += a.length;
                            else {
                                var r = a.regex,
                                    s = a.parser,
                                    c = e.substr(n),
                                    d = r.exec(c)[0];
                                s.call(t, d), e = e.replace(d, "")
                            }
                        }
                        return function(e) {
                            var t = e.afternoon;
                            if (void 0 !== t) {
                                var i = e.hours;
                                t ? i < 12 && (e.hours += 12) : 12 === i && (e.hours = 0), delete e.afternoon
                            }
                        }(t), t
                    }
                }
                return function(e, t, i) {
                    i.p.customParseFormat = !0, e && e.parseTwoDigitYear && (o = e.parseTwoDigitYear);
                    var n = t.prototype,
                        a = n.parse;
                    n.parse = function(e) {
                        var t = e.date,
                            n = e.utc,
                            o = e.args;
                        this.$u = n;
                        var l = o[1];
                        if ("string" == typeof l) {
                            var s = !0 === o[2],
                                c = !0 === o[3],
                                d = s || c,
                                u = o[2];
                            c && (u = o[2]), r = this.$locale(), !s && u && (r = i.Ls[u]), this.$d = function(e, t, i) {
                                try {
                                    if (["x", "X"].indexOf(t) > -1) return new Date(("X" === t ? 1e3 : 1) * e);
                                    var n = m(t)(e),
                                        a = n.year,
                                        r = n.month,
                                        o = n.day,
                                        l = n.hours,
                                        s = n.minutes,
                                        c = n.seconds,
                                        d = n.milliseconds,
                                        u = n.zone,
                                        p = new Date,
                                        v = o || (a || r ? 1 : p.getDate()),
                                        b = a || p.getFullYear(),
                                        f = 0;
                                    a && !r || (f = r > 0 ? r - 1 : p.getMonth());
                                    var h = l || 0,
                                        g = s || 0,
                                        k = c || 0,
                                        y = d || 0;
                                    return u ? new Date(Date.UTC(b, f, v, h, g, k, y + 60 * u.offset * 1e3)) : i ? new Date(Date.UTC(b, f, v, h, g, k, y)) : new Date(b, f, v, h, g, k, y)
                                } catch (e) {
                                    return new Date("")
                                }
                            }(t, l, n), this.init(), u && !0 !== u && (this.$L = this.locale(u).$L), d && t != this.format(l) && (this.$d = new Date("")), r = {}
                        } else if (l instanceof Array)
                            for (var p = l.length, v = 1; v <= p; v += 1) {
                                o[1] = l[v - 1];
                                var b = i.apply(this, o);
                                if (b.isValid()) {
                                    this.$d = b.$d, this.$L = b.$L, this.init();
                                    break
                                }
                                v === p && (this.$d = new Date(""))
                            } else a.call(this, e)
                    }
                }
            }()
        },
        GYGN: function(e, t, i) {
            "use strict";
            var n = i("dVLG"),
                a = i("VBdi"),
                r = i.n(a),
                o = i("vUkw"),
                l = i.n(o),
                s = i("MwNz"),
                c = i("N4w9"),
                d = i("ZDfq"),
                u = i("5pgF"),
                m = i("AYes"),
                p = i("8+YW");
            i("EQ5g");
            const v = e => {
                let {
                    authorList: t,
                    fullDisplay: i,
                    lazyLoading: a
                } = e;
                return Object(n.c)("ul", {
                    className: "article-author"
                }, t.map(e => {
                    const t = Object(u.a)(e.avatars, "96") || s.a.get("authorPlaceholder");
                    return Object(n.c)("li", {
                        className: "article-author__item",
                        key: e.id
                    }, Object(n.c)(p.a, {
                        className: "article-author__link",
                        to: e.link,
                        author: e,
                        label: "Author Image",
                        eventTarget: e.name
                    }, Object(n.c)("img", {
                        className: "article-author__image",
                        src: t,
                        alt: e.name,
                        height: 60,
                        width: 60,
                        loading: a ? "lazy" : "eager"
                    })), Object(n.c)("div", {
                        className: "article-author__info"
                    }, Object(n.c)("div", {
                        className: "article-author__name"
                    }, Object(n.c)(m.a, {
                        author: e
                    })), Object(n.c)(c.a.Consumer, null, t => Object(n.c)(r.a.Fragment, null, e.jobTitle && Object(n.c)("div", {
                        className: "article-author__title"
                    }, e.jobTitle), i && e.description && Object(n.c)("div", {
                        className: "article-author__desc",
                        css: Object(n.b)({
                            fontFamily: t.theme.fonts.articleBody
                        }, ""),
                        dangerouslySetInnerHTML: {
                            __html: l()(e.description, d.summaryHtml)
                        }
                    })))))
                }))
            };
            v.defaultProps = {
                fullDisplay: !1,
                lazyLoading: !0
            }, t.a = v
        },
        HiUM: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = (i("VBdi"), i("Ot6i")),
                o = i("MwNz"),
                l = i("xAi6"),
                s = i("kXcp"),
                c = i("8+YW"),
                d = (i("hXB9"), i("dVLG"));
            t.a = e => {
                var t;
                let {
                    placementSource: i = "",
                    type: n
                } = e;
                if (!Object(s.b)("content-types/daily-brief") || !Object(s.b)("daily-brief-cta/status")) return null;
                const u = o.a.get("i18n"),
                    m = a()("daily-brief-cta", {
                        "daily-brief-cta--desktop": "desktop" === n,
                        "daily-brief-cta--mobile": "mobile" === n
                    }),
                    p = i ? Object(r.d)({
                        recirculationSource: "DailyBrief CTA " + i
                    }) : {};
                return Object(d.c)("div", {
                    className: m,
                    id: l.BYPASS_CONTENT_TYPES.DAILY_BRIEF_CTA,
                    tabIndex: "-1",
                    "aria-label": u.t("Daily brief"),
                    "data-testid": "daily-brief-cta"
                }, Object(d.c)("div", {
                    className: "daily-brief-cta__header"
                }, Object(d.c)("div", {
                    className: "daily-brief-cta__header-title",
                    role: "heading",
                    "aria-level": "2",
                    "aria-label": u.t("Daily brief")
                }, Object(d.c)("span", {
                    "aria-hidden": "true"
                }, u.t("Daily brief CTA title daily")), Object(d.c)("span", {
                    "aria-hidden": "true"
                }, " " + u.t("Daily brief CTA title brief"))), Object(d.c)("div", {
                    className: "daily-brief-cta__header-description"
                }, u.t("Daily brief CTA description"))), Object(d.c)(c.a, {
                    className: "daily-brief-cta__btn",
                    to: null === (t = o.a.get("dailyBriefConfig")) || void 0 === t ? void 0 : t.slug,
                    label: "Daily brief CTA button label",
                    title: u.t("Daily brief CTA button label"),
                    analyticsMetaProps: p
                }, u.t("Daily brief CTA button label")))
            }
        },
        IhaD: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return d
            }));
            var n = i("dQgG"),
                a = i("B1Rb"),
                r = i.n(a),
                o = i("VBdi"),
                l = i("96Qw"),
                s = i("/Qav"),
                c = i("dVLG");

            function d(e) {
                return t => {
                    const i = (e => {
                            return e.article ? "article-" + e.article.id : e.category ? "" + e.category : e.feedDetails && e.curatedFeedQuery ? "homepage-curated-feed" : (null === e || void 0 === e ? void 0 : e.history) ? null === e || void 0 === e || null === (t = e.history) || void 0 === t || null === (i = t.location) || void 0 === i ? void 0 : i.pathname : "No PageId found.";
                            var t, i
                        })(t),
                        a = Object(l.useHistory)(),
                        d = Object(o.useContext)(s.a),
                        [u, m] = Object(o.useState)(!1),
                        p = d.getScrollState(i),
                        v = (null === p || void 0 === p ? void 0 : p.scrollPosition) || 0,
                        b = "POP" === (null === a || void 0 === a ? void 0 : a.action),
                        [f, h] = Object(o.useState)(!1),
                        g = () => {
                            b && v > 0 && n.canUseDOM && window.scrollTo(0, v)
                        };
                    (e => {
                        let {
                            pageId: t,
                            humanScrolled: i
                        } = e;
                        const n = Object(o.useContext)(s.a);
                        Object(o.useEffect)(() => {
                            const e = r()(() => {
                                if (i) {
                                    const e = n.getScrollState(t);
                                    n.setScrollState(t, { ...e,
                                        scrollPosition: window.scrollY
                                    })
                                }
                            }, 250);
                            return window.addEventListener("scroll", e), () => {
                                window.removeEventListener("scroll", e)
                            }
                        }, [t, i, n])
                    })({
                        pageId: i,
                        humanScrolled: f
                    }), Object(o.useEffect)(() => {
                        const e = ["keydown", "DOMMouseScroll", "wheel"];
                        e.forEach(e => {
                            document.addEventListener(e, k)
                        });
                        const t = setTimeout(g, 500);
                        return () => {
                            e.forEach(e => {
                                document.removeEventListener(e, k)
                            }), clearTimeout(t)
                        }
                    }, []);
                    const k = e => {
                        "wheel" === e.type && 0 === e.which && h(!0)
                    };
                    Object(o.useEffect)(() => {
                        if (b && u && v > 0) {
                            const e = setTimeout(g, 0);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                    }, [u]);
                    const y = { ...t,
                        scrollState: p,
                        renderedCallback: () => {
                            u || m(!0)
                        },
                        updateScrollPageState: function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            d.setScrollState(i, { ...d.getScrollState(i),
                                ...e
                            })
                        }
                    };
                    return Object(c.c)(e, y)
                }
            }
        },
        IyZ2: function(e, t, i) {
            var n = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ArchipelagoPlaylistQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "playlist"
                                },
                                name: {
                                    kind: "Name",
                                    value: "playlistPostsByID"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "posts"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "details"
                                                },
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slug"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "video"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "duration"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 285
                    }
                },
                a = {};
            n.definitions = n.definitions.concat(i("IdT5").definitions.filter((function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })));
            var r = {};

            function o(e, t) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var n = e.definitions[i];
                    if (n.name && n.name.value == t) return n
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    ! function e(t, i) {
                        if ("FragmentSpread" === t.kind) i.add(t.name.value);
                        else if ("VariableDefinition" === t.kind) {
                            var n = t.type;
                            "NamedType" === n.kind && i.add(n.name.value)
                        }
                        t.selectionSet && t.selectionSet.selections.forEach((function(t) {
                            e(t, i)
                        })), t.variableDefinitions && t.variableDefinitions.forEach((function(t) {
                            e(t, i)
                        })), t.definitions && t.definitions.forEach((function(t) {
                            e(t, i)
                        }))
                    }(e, t), r[e.name.value] = t
                }
            })), e.exports = n, e.exports.ArchipelagoPlaylistQuery = function(e, t) {
                var i = {
                    kind: e.kind,
                    definitions: [o(e, t)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var n = r[t] || new Set,
                    a = new Set,
                    l = new Set;
                for (n.forEach((function(e) {
                        l.add(e)
                    })); l.size > 0;) {
                    var s = l;
                    l = new Set, s.forEach((function(e) {
                        a.has(e) || (a.add(e), (r[e] || new Set).forEach((function(e) {
                            l.add(e)
                        })))
                    }))
                }
                return a.forEach((function(t) {
                    var n = o(e, t);
                    n && i.definitions.push(n)
                })), i
            }(n, "ArchipelagoPlaylistQuery")
        },
        JIX4: function(e, t) {
            t.SAME = 0;
            t.CAMELCASE = 1, t.possibleStandardNames = {
                accept: 0,
                acceptCharset: 1,
                "accept-charset": "acceptCharset",
                accessKey: 1,
                action: 0,
                allowFullScreen: 1,
                alt: 0,
                as: 0,
                async: 0,
                autoCapitalize: 1,
                autoComplete: 1,
                autoCorrect: 1,
                autoFocus: 1,
                autoPlay: 1,
                autoSave: 1,
                capture: 0,
                cellPadding: 1,
                cellSpacing: 1,
                challenge: 0,
                charSet: 1,
                checked: 0,
                children: 0,
                cite: 0,
                class: "className",
                classID: 1,
                className: 1,
                cols: 0,
                colSpan: 1,
                content: 0,
                contentEditable: 1,
                contextMenu: 1,
                controls: 0,
                controlsList: 1,
                coords: 0,
                crossOrigin: 1,
                dangerouslySetInnerHTML: 1,
                data: 0,
                dateTime: 1,
                default: 0,
                defaultChecked: 1,
                defaultValue: 1,
                defer: 0,
                dir: 0,
                disabled: 0,
                disablePictureInPicture: 1,
                disableRemotePlayback: 1,
                download: 0,
                draggable: 0,
                encType: 1,
                enterKeyHint: 1,
                for: "htmlFor",
                form: 0,
                formMethod: 1,
                formAction: 1,
                formEncType: 1,
                formNoValidate: 1,
                formTarget: 1,
                frameBorder: 1,
                headers: 0,
                height: 0,
                hidden: 0,
                high: 0,
                href: 0,
                hrefLang: 1,
                htmlFor: 1,
                httpEquiv: 1,
                "http-equiv": "httpEquiv",
                icon: 0,
                id: 0,
                innerHTML: 1,
                inputMode: 1,
                integrity: 0,
                is: 0,
                itemID: 1,
                itemProp: 1,
                itemRef: 1,
                itemScope: 1,
                itemType: 1,
                keyParams: 1,
                keyType: 1,
                kind: 0,
                label: 0,
                lang: 0,
                list: 0,
                loop: 0,
                low: 0,
                manifest: 0,
                marginWidth: 1,
                marginHeight: 1,
                max: 0,
                maxLength: 1,
                media: 0,
                mediaGroup: 1,
                method: 0,
                min: 0,
                minLength: 1,
                multiple: 0,
                muted: 0,
                name: 0,
                noModule: 1,
                nonce: 0,
                noValidate: 1,
                open: 0,
                optimum: 0,
                pattern: 0,
                placeholder: 0,
                playsInline: 1,
                poster: 0,
                preload: 0,
                profile: 0,
                radioGroup: 1,
                readOnly: 1,
                referrerPolicy: 1,
                rel: 0,
                required: 0,
                reversed: 0,
                role: 0,
                rows: 0,
                rowSpan: 1,
                sandbox: 0,
                scope: 0,
                scoped: 0,
                scrolling: 0,
                seamless: 0,
                selected: 0,
                shape: 0,
                size: 0,
                sizes: 0,
                span: 0,
                spellCheck: 1,
                src: 0,
                srcDoc: 1,
                srcLang: 1,
                srcSet: 1,
                start: 0,
                step: 0,
                style: 0,
                summary: 0,
                tabIndex: 1,
                target: 0,
                title: 0,
                type: 0,
                useMap: 1,
                value: 0,
                width: 0,
                wmode: 0,
                wrap: 0,
                about: 0,
                accentHeight: 1,
                "accent-height": "accentHeight",
                accumulate: 0,
                additive: 0,
                alignmentBaseline: 1,
                "alignment-baseline": "alignmentBaseline",
                allowReorder: 1,
                alphabetic: 0,
                amplitude: 0,
                arabicForm: 1,
                "arabic-form": "arabicForm",
                ascent: 0,
                attributeName: 1,
                attributeType: 1,
                autoReverse: 1,
                azimuth: 0,
                baseFrequency: 1,
                baselineShift: 1,
                "baseline-shift": "baselineShift",
                baseProfile: 1,
                bbox: 0,
                begin: 0,
                bias: 0,
                by: 0,
                calcMode: 1,
                capHeight: 1,
                "cap-height": "capHeight",
                clip: 0,
                clipPath: 1,
                "clip-path": "clipPath",
                clipPathUnits: 1,
                clipRule: 1,
                "clip-rule": "clipRule",
                color: 0,
                colorInterpolation: 1,
                "color-interpolation": "colorInterpolation",
                colorInterpolationFilters: 1,
                "color-interpolation-filters": "colorInterpolationFilters",
                colorProfile: 1,
                "color-profile": "colorProfile",
                colorRendering: 1,
                "color-rendering": "colorRendering",
                contentScriptType: 1,
                contentStyleType: 1,
                cursor: 0,
                cx: 0,
                cy: 0,
                d: 0,
                datatype: 0,
                decelerate: 0,
                descent: 0,
                diffuseConstant: 1,
                direction: 0,
                display: 0,
                divisor: 0,
                dominantBaseline: 1,
                "dominant-baseline": "dominantBaseline",
                dur: 0,
                dx: 0,
                dy: 0,
                edgeMode: 1,
                elevation: 0,
                enableBackground: 1,
                "enable-background": "enableBackground",
                end: 0,
                exponent: 0,
                externalResourcesRequired: 1,
                fill: 0,
                fillOpacity: 1,
                "fill-opacity": "fillOpacity",
                fillRule: 1,
                "fill-rule": "fillRule",
                filter: 0,
                filterRes: 1,
                filterUnits: 1,
                floodOpacity: 1,
                "flood-opacity": "floodOpacity",
                floodColor: 1,
                "flood-color": "floodColor",
                focusable: 0,
                fontFamily: 1,
                "font-family": "fontFamily",
                fontSize: 1,
                "font-size": "fontSize",
                fontSizeAdjust: 1,
                "font-size-adjust": "fontSizeAdjust",
                fontStretch: 1,
                "font-stretch": "fontStretch",
                fontStyle: 1,
                "font-style": "fontStyle",
                fontVariant: 1,
                "font-variant": "fontVariant",
                fontWeight: 1,
                "font-weight": "fontWeight",
                format: 0,
                from: 0,
                fx: 0,
                fy: 0,
                g1: 0,
                g2: 0,
                glyphName: 1,
                "glyph-name": "glyphName",
                glyphOrientationHorizontal: 1,
                "glyph-orientation-horizontal": "glyphOrientationHorizontal",
                glyphOrientationVertical: 1,
                "glyph-orientation-vertical": "glyphOrientationVertical",
                glyphRef: 1,
                gradientTransform: 1,
                gradientUnits: 1,
                hanging: 0,
                horizAdvX: 1,
                "horiz-adv-x": "horizAdvX",
                horizOriginX: 1,
                "horiz-origin-x": "horizOriginX",
                ideographic: 0,
                imageRendering: 1,
                "image-rendering": "imageRendering",
                in2: 0,
                in: 0,
                inlist: 0,
                intercept: 0,
                k1: 0,
                k2: 0,
                k3: 0,
                k4: 0,
                k: 0,
                kernelMatrix: 1,
                kernelUnitLength: 1,
                kerning: 0,
                keyPoints: 1,
                keySplines: 1,
                keyTimes: 1,
                lengthAdjust: 1,
                letterSpacing: 1,
                "letter-spacing": "letterSpacing",
                lightingColor: 1,
                "lighting-color": "lightingColor",
                limitingConeAngle: 1,
                local: 0,
                markerEnd: 1,
                "marker-end": "markerEnd",
                markerHeight: 1,
                markerMid: 1,
                "marker-mid": "markerMid",
                markerStart: 1,
                "marker-start": "markerStart",
                markerUnits: 1,
                markerWidth: 1,
                mask: 0,
                maskContentUnits: 1,
                maskUnits: 1,
                mathematical: 0,
                mode: 0,
                numOctaves: 1,
                offset: 0,
                opacity: 0,
                operator: 0,
                order: 0,
                orient: 0,
                orientation: 0,
                origin: 0,
                overflow: 0,
                overlinePosition: 1,
                "overline-position": "overlinePosition",
                overlineThickness: 1,
                "overline-thickness": "overlineThickness",
                paintOrder: 1,
                "paint-order": "paintOrder",
                panose1: 0,
                "panose-1": "panose1",
                pathLength: 1,
                patternContentUnits: 1,
                patternTransform: 1,
                patternUnits: 1,
                pointerEvents: 1,
                "pointer-events": "pointerEvents",
                points: 0,
                pointsAtX: 1,
                pointsAtY: 1,
                pointsAtZ: 1,
                prefix: 0,
                preserveAlpha: 1,
                preserveAspectRatio: 1,
                primitiveUnits: 1,
                property: 0,
                r: 0,
                radius: 0,
                refX: 1,
                refY: 1,
                renderingIntent: 1,
                "rendering-intent": "renderingIntent",
                repeatCount: 1,
                repeatDur: 1,
                requiredExtensions: 1,
                requiredFeatures: 1,
                resource: 0,
                restart: 0,
                result: 0,
                results: 0,
                rotate: 0,
                rx: 0,
                ry: 0,
                scale: 0,
                security: 0,
                seed: 0,
                shapeRendering: 1,
                "shape-rendering": "shapeRendering",
                slope: 0,
                spacing: 0,
                specularConstant: 1,
                specularExponent: 1,
                speed: 0,
                spreadMethod: 1,
                startOffset: 1,
                stdDeviation: 1,
                stemh: 0,
                stemv: 0,
                stitchTiles: 1,
                stopColor: 1,
                "stop-color": "stopColor",
                stopOpacity: 1,
                "stop-opacity": "stopOpacity",
                strikethroughPosition: 1,
                "strikethrough-position": "strikethroughPosition",
                strikethroughThickness: 1,
                "strikethrough-thickness": "strikethroughThickness",
                string: 0,
                stroke: 0,
                strokeDasharray: 1,
                "stroke-dasharray": "strokeDasharray",
                strokeDashoffset: 1,
                "stroke-dashoffset": "strokeDashoffset",
                strokeLinecap: 1,
                "stroke-linecap": "strokeLinecap",
                strokeLinejoin: 1,
                "stroke-linejoin": "strokeLinejoin",
                strokeMiterlimit: 1,
                "stroke-miterlimit": "strokeMiterlimit",
                strokeWidth: 1,
                "stroke-width": "strokeWidth",
                strokeOpacity: 1,
                "stroke-opacity": "strokeOpacity",
                suppressContentEditableWarning: 1,
                suppressHydrationWarning: 1,
                surfaceScale: 1,
                systemLanguage: 1,
                tableValues: 1,
                targetX: 1,
                targetY: 1,
                textAnchor: 1,
                "text-anchor": "textAnchor",
                textDecoration: 1,
                "text-decoration": "textDecoration",
                textLength: 1,
                textRendering: 1,
                "text-rendering": "textRendering",
                to: 0,
                transform: 0,
                typeof: 0,
                u1: 0,
                u2: 0,
                underlinePosition: 1,
                "underline-position": "underlinePosition",
                underlineThickness: 1,
                "underline-thickness": "underlineThickness",
                unicode: 0,
                unicodeBidi: 1,
                "unicode-bidi": "unicodeBidi",
                unicodeRange: 1,
                "unicode-range": "unicodeRange",
                unitsPerEm: 1,
                "units-per-em": "unitsPerEm",
                unselectable: 0,
                vAlphabetic: 1,
                "v-alphabetic": "vAlphabetic",
                values: 0,
                vectorEffect: 1,
                "vector-effect": "vectorEffect",
                version: 0,
                vertAdvY: 1,
                "vert-adv-y": "vertAdvY",
                vertOriginX: 1,
                "vert-origin-x": "vertOriginX",
                vertOriginY: 1,
                "vert-origin-y": "vertOriginY",
                vHanging: 1,
                "v-hanging": "vHanging",
                vIdeographic: 1,
                "v-ideographic": "vIdeographic",
                viewBox: 1,
                viewTarget: 1,
                visibility: 0,
                vMathematical: 1,
                "v-mathematical": "vMathematical",
                vocab: 0,
                widths: 0,
                wordSpacing: 1,
                "word-spacing": "wordSpacing",
                writingMode: 1,
                "writing-mode": "writingMode",
                x1: 0,
                x2: 0,
                x: 0,
                xChannelSelector: 1,
                xHeight: 1,
                "x-height": "xHeight",
                xlinkActuate: 1,
                "xlink:actuate": "xlinkActuate",
                xlinkArcrole: 1,
                "xlink:arcrole": "xlinkArcrole",
                xlinkHref: 1,
                "xlink:href": "xlinkHref",
                xlinkRole: 1,
                "xlink:role": "xlinkRole",
                xlinkShow: 1,
                "xlink:show": "xlinkShow",
                xlinkTitle: 1,
                "xlink:title": "xlinkTitle",
                xlinkType: 1,
                "xlink:type": "xlinkType",
                xmlBase: 1,
                "xml:base": "xmlBase",
                xmlLang: 1,
                "xml:lang": "xmlLang",
                xmlns: 0,
                "xml:space": "xmlSpace",
                xmlnsXlink: 1,
                "xmlns:xlink": "xmlnsXlink",
                xmlSpace: 1,
                y1: 0,
                y2: 0,
                y: 0,
                yChannelSelector: 1,
                z: 0,
                zoomAndPan: 1
            }
        },
        JMEX: function(e, t, i) {
            "use strict";
            var n = i("/WA2"),
                a = i("VBdi"),
                r = i.n(a),
                o = i("dVLG");
            const l = e => {
                let {
                    content: t = ""
                } = e;
                if (null !== t && t.length > 0 && t.includes("opta-widget")) {
                    const e = Object(n.a)({
                        resolved: {},
                        chunkName: () => "OptaWidgetResources",
                        isReady(e) {
                            const t = this.resolve(e);
                            return !0 === this.resolved[t] && !!i.m[t]
                        },
                        importAsync: () => i.e(6).then(i.bind(null, "ds+Q")),
                        requireAsync(e) {
                            const t = this.resolve(e);
                            return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                        },
                        requireSync(e) {
                            const t = this.resolve(e);
                            return i(t)
                        },
                        resolve() {
                            return "ds+Q"
                        }
                    });
                    return Object(o.c)(e, null)
                }
                return null
            };
            t.a = l
        },
        KSud: function(e, t, i) {},
        KY5H: function(e, t, i) {
            "use strict";
            var n = i("FQxg"),
                a = i("AAFT"),
                r = i.n(a),
                o = (i("VBdi"), i("YSgp")),
                l = i.n(o),
                s = i("iaCl"),
                c = i("9N7U"),
                d = i("18NH"),
                u = i("dVLG");
            t.a = e => {
                let {
                    style: t = "full-width",
                    postType: i,
                    classname: a,
                    amplitudeExperimentId: o,
                    menuSlug: m = "",
                    analyticsMetaProps: p = {}
                } = e;
                const {
                    loading: v,
                    error: b,
                    data: f
                } = Object(n.b)(l.a, {
                    variables: {
                        name: null !== m && void 0 !== m ? m : "article-fallback-menu"
                    }
                }), h = Object(s.a)(o, "treatment");
                if (v || b || !f) return null;
                if (o && !h) return null;
                const g = Object(c.prepareCustomNavigationData)(null === f || void 0 === f ? void 0 : f.menu),
                    k = null === g || void 0 === g ? void 0 : g.items,
                    y = null === k || void 0 === k ? void 0 : k[0],
                    O = k.slice(1),
                    N = (null === k || void 0 === k ? void 0 : k.length) > 0,
                    j = r()("curated-sticky-nav-menu", a);
                return Object(u.c)(d.b, {
                    menu: O,
                    isSticky: N,
                    displayedTitle: null === y || void 0 === y ? void 0 : y.title,
                    displayedTitleLink: null === y || void 0 === y ? void 0 : y.url,
                    style: t,
                    postType: i,
                    skipPageMeta: !0,
                    classes: [j],
                    analyticsMetaProps: {
                        module: "subNavFallback",
                        ...p
                    }
                })
            }
        },
        KmLg: function(e, t, i) {},
        LkUN: function(e, t, i) {
            var n = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ArchipelagoMoreVideoFromTopicQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "category"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "categoryType"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "postType"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "quantity"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "offset"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "exclude"
                                }
                            },
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "articles"
                                },
                                name: {
                                    kind: "Name",
                                    value: "posts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "category"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "category"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "categoryType"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "categoryType"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "direction"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DESC"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "quantity"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "excludeIds"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "exclude"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "postTypes"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: [{
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "postType"
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "details"
                                        },
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "video"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "duration"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "VideoThumbnail"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 573
                    }
                },
                a = {};

            function r(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                }))
            }
            n.definitions = n.definitions.concat(r(i("IdT5").definitions)), n.definitions = n.definitions.concat(r(i("OwhS").definitions));
            var o = {};

            function l(e, t) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var n = e.definitions[i];
                    if (n.name && n.name.value == t) return n
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    ! function e(t, i) {
                        if ("FragmentSpread" === t.kind) i.add(t.name.value);
                        else if ("VariableDefinition" === t.kind) {
                            var n = t.type;
                            "NamedType" === n.kind && i.add(n.name.value)
                        }
                        t.selectionSet && t.selectionSet.selections.forEach((function(t) {
                            e(t, i)
                        })), t.variableDefinitions && t.variableDefinitions.forEach((function(t) {
                            e(t, i)
                        })), t.definitions && t.definitions.forEach((function(t) {
                            e(t, i)
                        }))
                    }(e, t), o[e.name.value] = t
                }
            })), e.exports = n, e.exports.ArchipelagoMoreVideoFromTopicQuery = function(e, t) {
                var i = {
                    kind: e.kind,
                    definitions: [l(e, t)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var n = o[t] || new Set,
                    a = new Set,
                    r = new Set;
                for (n.forEach((function(e) {
                        r.add(e)
                    })); r.size > 0;) {
                    var s = r;
                    r = new Set, s.forEach((function(e) {
                        a.has(e) || (a.add(e), (o[e] || new Set).forEach((function(e) {
                            r.add(e)
                        })))
                    }))
                }
                return a.forEach((function(t) {
                    var n = l(e, t);
                    n && i.definitions.push(n)
                })), i
            }(n, "ArchipelagoMoreVideoFromTopicQuery")
        },
        ObAp: function(e, t, i) {
            "use strict";
            var n = i("VBdi"),
                a = i("96Qw"),
                r = i("kXcp"),
                o = i("z6bU"),
                l = i("ZEv9"),
                s = i("dVLG");
            t.a = e => {
                let {
                    isVideoPage: t,
                    siteSection: i
                } = e;
                const c = Object(a.useLocation)(),
                    d = (null === c || void 0 === c ? void 0 : c.hash) || "",
                    u = d.includes(o.a + "-"),
                    [m, p] = Object(n.useState)(u),
                    v = Object(n.useMemo)(() => {
                        const e = d.replace(`#${o.a}-`, "") || "",
                            [t, i] = e.split(":");
                        if (!t) return null;
                        const n = parseFloat(i);
                        return {
                            id: t,
                            startTime: isNaN(n) ? 0 : n
                        }
                    }, []),
                    b = t ? "vertical-videos/video-live-page" : "vertical-videos";
                return v && Object(r.b)(b) ? Object(s.c)(l.a, {
                    isModalOpen: m,
                    initialVideo: v,
                    initialVideoList: [v],
                    onModalClose: () => {
                        p(!1)
                    },
                    siteSection: i
                }) : null
            }
        },
        OtuB: function(e, t, i) {
            "use strict";
            var n = i("VBdi"),
                a = i.n(n),
                r = i("9mJr"),
                o = i("Ot6i"),
                l = i("MwNz"),
                s = i("N4w9"),
                c = i("ugo3"),
                d = i("4UCj"),
                u = i("9N7U"),
                m = i("SWuB"),
                p = i("ncCA"),
                v = i("8+YW"),
                b = (i("ioBQ"), i("dVLG"));
            t.a = e => {
                let {
                    article: t,
                    isAmp: i
                } = e;
                const f = ((e, t) => {
                        if (!Array.isArray(e.source) || 0 === e.source.length) return null;
                        const i = l.a.get("i18n"),
                            n = e.source.filter(e => e.featuredTaxonomy && e.featuredTaxonomyImage && e.featuredTaxonomyImage.sourceUrl).map((e, n) => {
                                if (e.featuredActionLink) {
                                    const a = `${e.name} ${i.t("link")}`;
                                    return Object(b.c)("div", {
                                        className: "source-featured",
                                        key: n
                                    }, Object(b.c)(p.a, {
                                        to: e.featuredActionLink,
                                        isAmp: t,
                                        target: "_blank",
                                        label: "Breadcrumb",
                                        eventTarget: e.featuredActionLink,
                                        ariaLabel: a,
                                        analyticsMetaProps: Object(o.d)({
                                            recirculationSource: "Breadcrumb"
                                        })
                                    }, Object(c.b)(e.featuredTaxonomyImage, t)))
                                }
                                return Object(b.c)("div", {
                                    className: "source-featured",
                                    key: n
                                }, Object(c.b)(e.featuredTaxonomyImage, t, "source-featured-img", i.t("Featured source logo")))
                            });
                        return n.length > 0 ? n : null
                    })(t, i),
                    {
                        sections: h,
                        authors: g
                    } = Object(u.getMetadata)(t),
                    k = Object(m.d)(t),
                    y = l.a.get("breadcrumbs"),
                    O = Object(n.useContext)(s.b),
                    N = y.taxonomies.map(e => Object(m.c)(t, e, !0)).filter(e => !!e && "uncategorized" !== e.slug),
                    j = N.map(e => {
                        const t = y.displayPrecedence,
                            i = e[t[0]] || e[t[1]];
                        return Object(b.c)(v.a, {
                            key: e.slug,
                            to: e.link,
                            label: "Breadcrumb",
                            eventTarget: i,
                            analyticsMetaProps: Object(o.d)({
                                recirculationSource: "Breadcrumb"
                            })
                        }, i)
                    });
                return (null === j || void 0 === j ? void 0 : j.length) ? Object(b.c)(a.a.Fragment, null, Object(b.c)(r.a, null, Object(b.c)("meta", {
                    name: "pageSection",
                    content: h
                }), Object(b.c)("meta", {
                    name: "pageAuthors",
                    content: g
                }), Object(b.c)("meta", {
                    name: "pageType",
                    content: "Article Page"
                }), Object(b.c)("meta", {
                    name: "taxonomy-tags",
                    content: k
                }), Object(b.c)("script", {
                    type: "application/ld+json"
                }, Object(d.a)(N, y, O))), Object(b.c)("div", {
                    className: "breadcrumbs"
                }, Object(b.c)("div", {
                    className: "topics"
                }, j.reduce((e, t) => [e, y.separator, t])), f)) : Object(b.c)(a.a.Fragment, null, Object(b.c)(r.a, null, Object(b.c)("meta", {
                    name: "pageSection",
                    content: h
                }), Object(b.c)("meta", {
                    name: "pageAuthors",
                    content: g
                }), Object(b.c)("meta", {
                    name: "pageType",
                    content: "Article Page"
                }), Object(b.c)("meta", {
                    name: "taxonomy-tags",
                    content: k
                })), f && Object(b.c)("div", {
                    className: "breadcrumbs"
                }, f))
            }
        },
        OwhS: function(e, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "VideoThumbnail"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Post"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "featuredImage"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "sizes"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "sizeNames"
                                        },
                                        value: {
                                            kind: "ListValue",
                                            values: [{
                                                kind: "StringValue",
                                                value: "arc-image-16-9-270",
                                                block: !1
                                            }, {
                                                kind: "StringValue",
                                                value: "arc-image-16-9-730",
                                                block: !1
                                            }]
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "crop"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "width"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "url"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 161
                }
            };
            var n = {};

            function a(e, t) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var n = e.definitions[i];
                    if (n.name && n.name.value == t) return n
                }
            }
            i.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    ! function e(t, i) {
                        if ("FragmentSpread" === t.kind) i.add(t.name.value);
                        else if ("VariableDefinition" === t.kind) {
                            var n = t.type;
                            "NamedType" === n.kind && i.add(n.name.value)
                        }
                        t.selectionSet && t.selectionSet.selections.forEach((function(t) {
                            e(t, i)
                        })), t.variableDefinitions && t.variableDefinitions.forEach((function(t) {
                            e(t, i)
                        })), t.definitions && t.definitions.forEach((function(t) {
                            e(t, i)
                        }))
                    }(e, t), n[e.name.value] = t
                }
            })), e.exports = i, e.exports.VideoThumbnail = function(e, t) {
                var i = {
                    kind: e.kind,
                    definitions: [a(e, t)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var r = n[t] || new Set,
                    o = new Set,
                    l = new Set;
                for (r.forEach((function(e) {
                        l.add(e)
                    })); l.size > 0;) {
                    var s = l;
                    l = new Set, s.forEach((function(e) {
                        o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
                            l.add(e)
                        })))
                    }))
                }
                return o.forEach((function(t) {
                    var n = a(e, t);
                    n && i.definitions.push(n)
                })), i
            }(i, "VideoThumbnail")
        },
        PamH: function(e, t, i) {
            "use strict";

            function n(e, t, i, n, a, r, o) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = n, this.attributeNamespace = a, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = r, this.removeEmptyString = o
            }
            const a = {};
            ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach(e => {
                a[e] = new n(e, 0, !1, e, null, !1, !1)
            }), [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"]
            ].forEach(e => {
                let [t, i] = e;
                a[t] = new n(t, 1, !1, i, null, !1, !1)
            }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(e => {
                a[e] = new n(e, 2, !1, e.toLowerCase(), null, !1, !1)
            }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(e => {
                a[e] = new n(e, 2, !1, e, null, !1, !1)
            }), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach(e => {
                a[e] = new n(e, 3, !1, e.toLowerCase(), null, !1, !1)
            }), ["checked", "multiple", "muted", "selected"].forEach(e => {
                a[e] = new n(e, 3, !0, e, null, !1, !1)
            }), ["capture", "download"].forEach(e => {
                a[e] = new n(e, 4, !1, e, null, !1, !1)
            }), ["cols", "rows", "size", "span"].forEach(e => {
                a[e] = new n(e, 6, !1, e, null, !1, !1)
            }), ["rowSpan", "start"].forEach(e => {
                a[e] = new n(e, 5, !1, e.toLowerCase(), null, !1, !1)
            });
            const r = /[\-\:]([a-z])/g,
                o = e => e[1].toUpperCase();
            ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach(e => {
                const t = e.replace(r, o);
                a[t] = new n(t, 1, !1, e, null, !1, !1)
            }), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(e => {
                const t = e.replace(r, o);
                a[t] = new n(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            }), ["xml:base", "xml:lang", "xml:space"].forEach(e => {
                const t = e.replace(r, o);
                a[t] = new n(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            }), ["tabIndex", "crossOrigin"].forEach(e => {
                a[e] = new n(e, 1, !1, e.toLowerCase(), null, !1, !1)
            });
            a.xlinkHref = new n("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(e => {
                a[e] = new n(e, 1, !1, e.toLowerCase(), null, !0, !0)
            });
            const {
                CAMELCASE: l,
                SAME: s,
                possibleStandardNames: c
            } = i("JIX4"), d = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), u = Object.keys(c).reduce((e, t) => {
                const i = c[t];
                return i === s ? e[t] = t : i === l ? e[t.toLowerCase()] = t : e[t] = i, e
            }, {});
            t.BOOLEAN = 3, t.BOOLEANISH_STRING = 2, t.NUMERIC = 5, t.OVERLOADED_BOOLEAN = 4, t.POSITIVE_NUMERIC = 6, t.RESERVED = 0, t.STRING = 1, t.getPropertyInfo = function(e) {
                return a.hasOwnProperty(e) ? a[e] : null
            }, t.isCustomAttribute = d, t.possibleStandardNames = u
        },
        PyY4: function(e, t, i) {},
        RrlQ: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = i("VBdi"),
                o = i.n(r),
                l = i("9mJr"),
                s = i("96Qw"),
                c = i("vUkw"),
                d = i.n(c),
                u = i("MwNz"),
                m = i("P/sV"),
                p = i("ZDfq"),
                v = i("xAi6"),
                b = i("8Ffx"),
                f = i("pbOP"),
                h = i("9N7U"),
                g = i("SWuB"),
                k = i("bogy"),
                y = i("Xyuu"),
                O = i("nDgB"),
                N = i("zOPM"),
                j = i("bUZ2"),
                S = i("DIDn"),
                w = (i("qOL4"), i("dVLG"));
            const T = e => {
                    let {
                        article: t
                    } = e;
                    const {
                        subheading: i,
                        title: n,
                        excerpt: r
                    } = t;
                    return Object(w.c)(o.a.Fragment, null, Object(w.c)("header", {
                        className: "article-header"
                    }, Object(w.c)(N.a, {
                        episode: t,
                        showTitleOnly: !0
                    }), Object(w.c)("h1", null, n)), i && Object(w.c)("p", {
                        className: a()("article__subhead", {
                            "u-inline ": Object(f.e)() || !r
                        })
                    }, i))
                },
                A = e => {
                    let {
                        playlistTitle: t,
                        shouldDisplay: i
                    } = e;
                    if (!i) return null;
                    const n = u.a.get("i18n");
                    return Object(w.c)("header", {
                        className: "playlist-header u-hidden--desktop"
                    }, Object(w.c)("span", {
                        className: "playlist-header-section__playlist-label",
                        "aria-hidden": "true"
                    }, n.t("Playlist")), Object(w.c)("h2", {
                        dangerouslySetInnerHTML: {
                            __html: Object(b.b)(t)
                        }
                    }))
                };
            t.a = e => {
                let {
                    article: t,
                    isAmp: i,
                    FeaturedComponent: n = j.a,
                    updateScrollPageState: r,
                    scrollState: c,
                    isPlaylistPage: b,
                    playlistTitle: N
                } = e;
                const _ = Object(s.useHistory)(),
                    x = Object(m.a)();
                if (!["episode", "video"].includes(t.postType)) return null;
                const {
                    excerpt: F
                } = t, E = u.a.get("i18n"), D = !i && "PUSH" === (null === _ || void 0 === _ ? void 0 : _.action), {
                    sections: P,
                    authors: M
                } = Object(h.getMetadata)(t), I = Object(g.d)(t), C = a()("video-page", "article__featured-video-wrapper", {
                    "playlist-page": b,
                    "article__featured-video-wrapper--amp": i
                }), V = a()({
                    "u-hidden--mobile": b
                });
                return Object(w.c)(o.a.Fragment, null, Object(w.c)(l.a, null, Object(w.c)("meta", {
                    name: "pageSection",
                    content: P
                }), Object(w.c)("meta", {
                    name: "pageAuthors",
                    content: M
                }), Object(w.c)("meta", {
                    name: "pageType",
                    content: "Article Page"
                }), Object(w.c)("meta", {
                    name: "taxonomy-tags",
                    content: I
                })), Object(w.c)("main", {
                    id: v.BYPASS_CONTENT_TYPES.MAIN,
                    tabIndex: "-1",
                    "aria-label": E.t("Main content area")
                }, Object(w.c)(A, {
                    playlistTitle: N,
                    shouldDisplay: b
                }), Object(w.c)("div", {
                    className: C
                }, Object(w.c)(n, {
                    article: t,
                    autoPlay: D
                })), Object(w.c)("div", {
                    className: V
                }, Object(w.c)(T, {
                    article: t
                }), Object(w.c)(O.a, {
                    correctionText: t.correctionText,
                    correctionDate: t.correctionDate
                }), F && Object(h.isVideoExcerptShown)(t) && Object(w.c)("div", {
                    className: "article-excerpt",
                    dangerouslySetInnerHTML: {
                        __html: d()(F, p.summaryHtml)
                    }
                }), Object(w.c)(y.a, {
                    updateScrollPageState: r,
                    scrollState: c,
                    article: t,
                    isAmp: i,
                    history: _,
                    extraContentBeforeSource: Object(w.c)("div", {
                        className: "article-info-block"
                    }, Object(w.c)(k.a, {
                        article: t,
                        showGravatar: !1,
                        suppressDates: !1,
                        isAmp: i
                    }), Object(w.c)(S.a, {
                        article: t,
                        combined: x || i,
                        isAmp: i,
                        isDarkMode: !0
                    })),
                    showArticleSource: !0,
                    showNewsletter: !1
                })), b && Object(w.c)("div", {
                    className: "u-hidden--desktop"
                }, Object(w.c)("div", {
                    className: "article-info-block"
                }, Object(w.c)(k.a, {
                    article: t,
                    showGravatar: !1,
                    suppressDates: !1,
                    isAmp: i
                }), Object(w.c)(S.a, {
                    article: t,
                    combined: x || i,
                    isAmp: i,
                    isDarkMode: !0
                })), Object(w.c)("div", {
                    className: "article-content"
                }, f.e && t.subheading && Object(w.c)("p", {
                    className: a()("article__subhead", {
                        "u-inline ": Object(f.e)() || !F
                    }),
                    dangerouslySetInnerHTML: {
                        __html: d()(t.subheading, p.summaryHtml)
                    }
                }), F && Object(h.isVideoExcerptShown)(t) && Object(w.c)("div", {
                    className: "article-excerpt",
                    dangerouslySetInnerHTML: {
                        __html: d()(F, p.summaryHtml)
                    }
                }), Object(w.c)(y.a, {
                    updateScrollPageState: r,
                    scrollState: c,
                    article: t,
                    isAmp: i,
                    history: _,
                    showArticleSource: !0,
                    showNewsletter: !1
                })))))
            }
        },
        "T2+i": function(e, t, i) {},
        T5lE: function(e, t, i) {},
        T6Rn: function(e, t, i) {},
        "VC/Y": function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return n
            }));
            class n {
                condition(e, t) {
                    throw new Error("condition method is not implemented")
                }
                transformer(e, t) {
                    throw new Error("transformer method is not implemented")
                }
            }
            t.b = class {
                constructor(e) {
                    this.article = e, this.transformers = []
                }
                addTransformer(e) {
                    e instanceof n !== !1 ? this.transformers.includes(e) ? console.warn("The transformer already exists") : this.transformers.push(e) : console.warn("Invalid transformer type")
                }
                applyTransformation(e, t) {
                    for (const i of this.transformers)
                        if (i.condition(e, this.article)) return i.transform(e, this.article);
                    return e
                }
            }
        },
        VJ3i: function(e, t, i) {},
        VPk0: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("keWc"),
                a = i.n(n);
            t.default = a.a.default || a.a
        },
        VvXL: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("iqzs"),
                a = i.n(n);
            t.default = a.a.default || a.a
        },
        WO12: function(e, t, i) {},
        WtrV: function(e, t, i) {},
        "Wz/t": function(e, t, i) {
            "use strict";
            var n = i("Miz2"),
                a = i("VBdi"),
                r = i("9mJr"),
                o = i("nlM2"),
                l = i("9N7U"),
                s = i("8+YW"),
                c = (i("XVJu"), i("dVLG"));
            t.a = e => {
                let {
                    header: t,
                    url: i,
                    id: d,
                    title: u,
                    className: m = "",
                    pageTemplate: p = ""
                } = e;
                const v = Object(o.a)();
                return Object(c.c)(a.Fragment, null, Object(c.c)("h1", {
                    className: "heading heading--section " + m
                }, Object(c.c)(s.a, Object(n.a)({
                    to: Object(l.trailingSlashIt)(i),
                    label: "Site Header"
                }, u ? {
                    title: u
                } : {}), t)), Object(c.c)(r.a, null, d && Object(c.c)("meta", {
                    name: "postID",
                    content: d
                }), p && Object(c.c)("meta", {
                    name: "pageTemplate",
                    content: p
                }), (null === v || void 0 === v ? void 0 : v.pathname) && Object(c.c)("meta", {
                    name: "pageLink",
                    content: Object(l.safeDecodeString)(v.pathname)
                })))
            }
        },
        XIHV: function(e, t, i) {},
        XOGc: function(e, t, i) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(i("VPk0")),
                r = i("eZjN");
            t.default = function(e, t) {
                var i = {};
                return e && "string" === typeof e ? ((0, a.default)(e, (function(e, n) {
                    e && n && (i[(0, r.camelCase)(e, t)] = n)
                })), i) : i
            }
        },
        XVJu: function(e, t, i) {},
        Xo00: function(e, t, i) {},
        Xyuu: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = i("VBdi"),
                o = i.n(r),
                l = i("BqLB"),
                s = i("3/Xq"),
                c = i("MwNz"),
                d = i("N4w9"),
                u = i("DL6t"),
                m = i("oHSs"),
                p = i("ekvm"),
                v = i("CiaY"),
                b = i("ugo3"),
                f = i("7tCN"),
                h = i("kXcp"),
                g = i("pbOP"),
                k = i("9N7U"),
                y = i("KthT"),
                O = i("3zfc"),
                N = i("ZDfq"),
                j = i("8Ffx");
            var S = class {
                    constructor(e) {
                        this.article = e, this.rules = []
                    }
                    addRule(e) {
                        "function" === typeof e ? this.rules.includes(e) ? console.warn("The rule already exists") : this.rules.push(e) : console.warn("Invalid rule type")
                    }
                    applyRules(e) {
                        return this.rules.forEach(t => {
                            e = t(this.article, e)
                        }), e
                    }
                },
                w = i("VC/Y"),
                T = i("HXpp");
            const A = (e, t) => {
                    var i;
                    const n = null === e || void 0 === e || null === (i = e.props) || void 0 === i ? void 0 : i.children;
                    if (null === n || void 0 === n) return null;
                    if ("string" === t && "string" === typeof n) return n;
                    if (n.type === t) return n;
                    if (!Array.isArray(n)) return A(n, t);
                    for (const r in n) {
                        var a;
                        if ((null === (a = n[r]) || void 0 === a ? void 0 : a.type) === t) return n[r];
                        const e = A(n[r], t);
                        if (e) return e
                    }
                    return A(n, t)
                },
                _ = e => {
                    var t;
                    if (!e) return !0;
                    if ("string" === typeof e) return Object(k.stringIsEmptyOrNewLine)(e) || "&nbsp;" === e;
                    if (["img"].includes(e.type)) return !1;
                    const i = null === (t = e.props) || void 0 === t ? void 0 : t.children;
                    return !i || "string" === typeof i && Object(k.stringIsEmptyOrNewLine)(i)
                };
            var x = i("P/sV"),
                F = i("dVLG");
            var E = e => {
                    let {
                        adUnit: t,
                        banner: i
                    } = e;
                    return Object(x.a)() ? null : Object(F.c)("div", {
                        className: "container--ads in-article-ads"
                    }, Object(F.c)(T.a, {
                        adUnit: t,
                        bannerType: i
                    }))
                },
                D = i("axnn");
            var P = e => {
                let {
                    adUnit: t,
                    banner: i
                } = e;
                return Object(x.a)() ? Object(F.c)("div", {
                    className: "connatix-wysiwyg-container slot-3-placement"
                }, Object(F.c)(D.a, {
                    type: "mobile"
                })) : Object(F.c)("div", {
                    className: "container--ads in-article-ads slot-3-placement"
                }, Object(F.c)(T.a, {
                    adUnit: t,
                    bannerType: i
                }))
            };
            const M = (e, t, i, n) => ![() => {
                    return "string" === typeof(e = i).type && /^h\d$/i.test(e.type) && "p" === n.type;
                    var e
                }, () => {
                    return "string" === typeof(e = i).type && /^[uod]l$/i.test(e.type) && "li" === n.type;
                    var e
                }, () => "li" === i.type && "li" === n.type, () => "img" === i.type || "img" === n.type || A(i, "img") || A(n, "img"), () => "figure" === i.type || "figure" === n.type, () => ((e, t, i) => {
                    for (let n = t + 1; n < e.length; n++) {
                        const t = e[n],
                            a = Object(k.stringIsEmptyOrNewLine)(t);
                        if ("string" !== typeof t || !a) return i.includes(t.type)
                    }
                    return !1
                })(e, t, ["img", "figure"]), () => "div" === n.type && (A(n, "video") || A(n, "video-js")), () => "blockquote" === i.type || "blockquote" === n.type, () => "iframe" === i.type || "iframe" === n.type, () => "p" === i.type && "div" === i.type && _(i), () => {
                    var e, t;
                    return "p" === i.type && "img" === (null === (e = i.props) || void 0 === e || null === (t = e.children) || void 0 === t ? void 0 : t.type)
                }].some(e => e()),
                I = e => {
                    let t = 0;
                    return "string" === typeof e ? t += e.length : Array.isArray(e.props.children) ? e.props.children.forEach(e => {
                        t += I(e)
                    }) : "string" === typeof e.props.children && (t += e.props.children.length), t
                };
            var C = (e, t) => {
                    let i = 500,
                        n = 0,
                        a = !1;
                    const r = c.a.get("AD_UNIT_PREFIX");
                    if (!Array.isArray(t)) return t;
                    const l = t.map((e, t) => {
                        const i = !Object(k.stringIsEmptyOrNewLine)(e),
                            n = !_(e);
                        return i && n ? t : null
                    }).filter(e => null !== e);
                    return t.map((e, s) => {
                        i += I(e);
                        const d = l.indexOf(s);
                        if (-1 === d) return e;
                        const u = l[d + 1],
                            m = t[u] || {};
                        if (!M(t, d, e, m) || !Object(v.a)()) return e;
                        if (i < 1500) return e;
                        i = 0, n = n >= 5 ? 1 : n + 1;
                        const p = r + "in-article",
                            b = `${c.a.get("AD_SLOTS").in_article}${n}`,
                            f = d === l.length - 1;
                        return a || 3 !== n ? f && a ? Object(F.c)(o.a.Fragment, null, e, Object(F.c)(E, {
                            adUnit: p,
                            banner: b
                        })) : Object(F.c)(o.a.Fragment, null, e, Object(F.c)("div", {
                            className: "container--ads in-article-ads"
                        }, Object(F.c)(T.a, {
                            adUnit: p,
                            bannerType: b
                        }))) : (a = !0, Object(F.c)(o.a.Fragment, null, e, Object(F.c)(P, {
                            adUnit: p,
                            banner: b
                        })))
                    })
                },
                V = i("vUkw"),
                L = i.n(V),
                R = i("IQ5x"),
                B = i.n(R),
                U = i("DBuU");
            var z = (e, t) => {
                    var i;
                    const n = B()(L()(e.content)).split(" ").length,
                        a = Object(g.g)() || n >= 100,
                        r = !1 === e.moreOnWidgetCurated && Object(g.e)(),
                        l = (null === (i = e.moreOnWidgetArticles) || void 0 === i ? void 0 : i.length) > 0 || e.explainerWidget || r,
                        s = (e => Array.isArray(e) ? e.filter(e => "p" === e.type && !_(e.props.children)).length : 0)(t) >= 4;
                    if (!a || !s || !l) return t;
                    let c = 0;
                    const d = t.map((e, t) => {
                        const i = !Object(k.stringIsEmptyOrNewLine)(e),
                            n = !_(e);
                        return i && n ? t : null
                    }).filter(e => null !== e);
                    return t.map((i, n) => {
                        const a = d.indexOf(n);
                        if (-1 === a) return i;
                        const r = d[a + 1],
                            l = t[r] || {};
                        return M(t, a, i, l) ? ("p" === i.type && (c += 1), "p" === i.type && 2 === c ? Object(F.c)(o.a.Fragment, null, i, Object(F.c)(U.a, {
                            article: e
                        })) : i) : i
                    })
                },
                H = i("zK3K");
            var Y = (e, t) => {
                    const i = c.a.get("i18n"),
                        n = Array.isArray(t) ? t : [t];
                    if (!n.some(e => {
                            var t, i;
                            return o.a.isValidElement(e) && "div" === e.type && (null === (t = e.props) || void 0 === t || null === (i = t.className) || void 0 === i ? void 0 : i.includes("aj-toc-wrapper"))
                        })) return t;
                    const a = [];
                    return n.map((e, t) => {
                        if ("h2" === e.type || "h3" === e.type) {
                            const i = o.a.Children.toArray(e.props.children).join(""),
                                n = "toc-section-" + (t + 1);
                            return a.push({
                                id: n,
                                text: i,
                                level: "h2" === e.type ? 2 : 3
                            }), o.a.cloneElement(e, {
                                id: n
                            })
                        }
                        return e
                    }).map(e => {
                        var t, n;
                        return o.a.isValidElement(e) && "div" === e.type && (null === (t = e.props) || void 0 === t || null === (n = t.className) || void 0 === n ? void 0 : n.includes("aj-toc-wrapper")) ? Object(F.c)(H.a, {
                            key: "toc",
                            tocItems: a,
                            i18n: i
                        }) : e
                    })
                },
                G = i("SWuB"),
                q = i("snVf");
            class W extends w.a {
                constructor() {
                    super(), this.counter = 0
                }
                condition(e, t) {
                    return "div" === e.type && (e.props["data-bc"] || !(!A(e, "video-js") && !A(e, "video")))
                }
                transform(e, t) {
                    const i = A(e, "video-js") || A(e, "video");
                    if (!i) return e;
                    const n = Object(G.c)(t, "categories"),
                        a = 0 === this.counter;
                    return this.counter += 1, Object(F.c)(q.a, {
                        key: e.key,
                        videoId: i.props["data-video-id"],
                        playerId: i.props["data-player"],
                        accountId: i.props["data-account"],
                        duration: i.props["data-duration"],
                        enablePlaylist: a,
                        playlistTerm: null === n || void 0 === n ? void 0 : n.name
                    })
                }
            }
            var Q = W,
                X = i("kBkb");
            class Z extends w.a {
                condition(e, t) {
                    return "h2" === e.type && void 0 !== e.props.id && null !== e.props.id && "" !== e.props.id
                }
                transform(e, t) {
                    return Object(F.c)(X.a, {
                        headingElement: e
                    })
                }
            }
            var $ = Z,
                K = i("oa0m");
            class J extends w.a {
                condition(e, t) {
                    var i;
                    return "script" === e.type && (null === (i = e.props.src) || void 0 === i ? void 0 : i.startsWith("https://telegram.org/js/telegram-widget.js")) && e.props["data-telegram-post"]
                }
                transform(e, t) {
                    return Object(F.c)(K.a, {
                        nodeData: e.props
                    })
                }
            }
            var ee = J;
            var te = e => {
                    var t;
                    let {
                        article: i,
                        showNewsletter: n
                    } = e;
                    const a = new w.b(i),
                        r = new S(i),
                        {
                            featuredImage: o,
                            content: l
                        } = i || {},
                        s = [];
                    if (!l) return null;
                    r.addRule(z), r.addRule(C), r.addRule(Y), a.addTransformer(new Q), a.addTransformer(new ee), (null === (t = c.a.get("articlePage")) || void 0 === t ? void 0 : t.canCopyHeading) && a.addTransformer(new $), (null === o || void 0 === o ? void 0 : o.itemNumber) && s.push(Object(N.getDuplicateImageFilter)(o.itemNumber));
                    const d = Object(j.a)(l, s);
                    let u = null;
                    try {
                        u = Object(O.b)(d, {
                            transform: (e, t) => a.applyTransformation(e, t)
                        })
                    } catch (p) {
                        return console.error(p), Object(F.c)("div", {
                            dangerouslySetInnerHTML: {
                                __html: d
                            }
                        })
                    }
                    const m = r.applyRules(u);
                    return Array.isArray(m) ? m.map((e, t) => "string" === typeof e ? e : { ...e,
                        key: t
                    }) : m
                },
                ie = i("vQk/"),
                ne = i("j6Iu"),
                ae = i("lPfT");
            i("Fx3t");
            class re extends o.a.Component {
                constructor(e) {
                    var t;
                    super(e), this.callRender = (e, t) => {
                        "undefined" !== typeof renderAd ? setTimeout(() => {
                            this.renderAds(e, t)
                        }, 1e3) : this.queueAdsRenderRequest(e, t)
                    }, this.wysiwygContainer = null, this.readMoreHandler = this.readMoreHandler.bind(this);
                    const i = void 0 === (null === (t = e.scrollState) || void 0 === t ? void 0 : t.isReadMoreButtonVisible) || e.scrollState.isReadMoreButtonVisible;
                    this.state = {
                        isReadMoreButtonVisible: i,
                        newsletterBeacon: null
                    }
                }
                shouldComponentUpdate(e, t) {
                    return this.state !== t || (Object(k.hasPostChanged)(this.props, e) || this.props.extraContentBeforeSource !== e.extraContentBeforeSource)
                }
                componentWillUnmount() {
                    Object(f.b)(this.iframeLoadIntervals), Object(y.b)(), Object(ne.c)()
                }
                componentDidMount() {
                    var e;
                    if (Object(f.m)(), Object(f.e)(), Object(f.k)(null === (e = this.props.article) || void 0 === e ? void 0 : e.content), Object(h.b)("newsletter") && !this.props.isAmp && this.props.showNewsletter) {
                        let e = document.getElementById("article-newsletter-slot");
                        const {
                            postType: t
                        } = this.props.article;
                        if (!e && "gallery" !== t) {
                            let i = !1;
                            i = ["video", "opinion", "episode"].includes(t) ? document.getElementById("main-content-area") : document.getElementsByClassName("article-source")[0], i && (e = document.createElement("div"), e.setAttribute("id", "article-newsletter-slot"), i.after(e))
                        }
                        this.setState({
                            newsletterBeacon: e
                        })
                    }
                }
                componentDidUpdate(e) {
                    e.article.id !== this.props.article.id ? (Object(f.m)(), this.setState({
                        isReadMoreButtonVisible: !0
                    })) : ["episode", "video"].includes(e.article.postType) && Object(f.m)()
                }
                processWysiwygContent(e) {
                    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    e && !this.wysiwygProcessed && (this.wysiwygProcessed = !0, Object(f.n)(e), Object(f.c)(e), this.iframeLoadIntervals = Object(f.d)(e), Object(h.b)("newsletter") && !Object(g.b)() && this.attachNewsletter(e), Object(h.b)("advertisements/status") && t && this.attachFeedAds(e), Object(f.j)(e), Object(f.f)(e), Object(f.o)(e))
                }
                getAdUnit() {
                    const e = (Object(k.getMoreFromSectionParams)(this.props.article).param || {}).category;
                    return `${c.a.get("AD_UNIT_PREFIX")}news/${e}/article`
                }
                renderAds(e, t) {
                    Object(g.e)() ? renderAd(e, t, "aljazeera_incontent", "mobile") : renderAd(e, t, "mobile")
                }
                queueAdsRenderRequest(e, t) {
                    Object(v.a)() || Object(k.queueRenderAdRequest)(e, t, "mobile")
                }
                attachFeedAds(e) {
                    const t = p.a.isMobile() && !Object(v.a)();
                    if (this.feedAdsAttached || !e || !t) return;
                    this.feedAdsAttached = !0;
                    const i = [].filter.call(e.querySelectorAll(".wysiwyg--all-content > p"), e => Object(k.isSafeForAds)(e));
                    if (i.length <= 7) return;
                    const n = c.a.get("i18n");
                    for (let r = 7; r < i.length; r += 7) {
                        const e = i[r];
                        try {
                            const t = "div-gpt-ad-213431597076-" + r,
                                i = document.createElement("div");
                            i.innerHTML = `<div class="ads article-ad-feed">\n\t\t\t\t\t\t\t<span class="ads__title">${n.t("Ads")}</span>\n\t\t\t\t\t\t\t<div id="${t}"\n\t\t\t\t\t\t\t\tclass="ads__slot"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t`, e.parentNode.insertBefore(i, e.nextSibling), this.callRender(this.getAdUnit(), t)
                        } catch (a) {
                            console.error(a)
                        }
                    }
                }
                attachNewsletter(e) {
                    const t = [].filter.call(e.querySelectorAll(".wysiwyg--all-content p"), e => e);
                    if (t.length >= 10)
                        for (let n = 10; n < t.length; n += 1) {
                            const e = t[n - 1];
                            try {
                                if (!this.isNewsletterValidPlace(e)) continue;
                                const t = document.createElement("div");
                                t.setAttribute("id", "article-newsletter-slot"), e.parentNode.insertBefore(t, e.nextSibling);
                                break
                            } catch (i) {
                                console.error(i)
                            }
                        }
                }
                hasValidParaTagBeforeNewsletter(e) {
                    let t = !0;
                    return 1 === e.childNodes.length && e.childNodes[0].tagName && e.childNodes.forEach(e => {
                        const i = "SPAN" === (null === e || void 0 === e ? void 0 : e.tagName) && e.classList.contains("article-time"),
                            n = "STRONG" === (null === e || void 0 === e ? void 0 : e.tagName);
                        (i || n) && (t = !1)
                    }), t
                }
                isNewsletterValidPlace(e) {
                    let t = !0;
                    const i = ["UL", "OL", "LI", "P", "H1", "H2", "H3", "H4", "H5", "H6", "FIGURE", "BLOCKQUOTE"];
                    let n = e;
                    for (t = this.hasValidParaTagBeforeNewsletter(n); !n.classList.contains("wysiwyg--all-content") && t;) {
                        var a, r, o;
                        const e = null === (a = n) || void 0 === a ? void 0 : a.nextElementSibling;
                        if (i.includes(n.parentNode.tagName) || (null === (l = n) || void 0 === l ? void 0 : l.childNodes) && l.childNodes.length > 0 && "IMG" === l.childNodes[l.childNodes.length - 1].tagName || e && (null === (r = n.nextElementSibling) || void 0 === r ? void 0 : r.childNodes) && n.nextElementSibling.childNodes.length > 0 && ["IMG", "FIGURE"].includes(n.nextElementSibling.childNodes[0].tagName) || e && (null === (o = n) || void 0 === o ? void 0 : o.previousElementSibling) && (["IMG", "FIGURE"].includes(n.nextElementSibling.tagName) || "IMG" === n.previousElementSibling.tagName)) {
                            t = !1;
                            break
                        }
                        n = n.parentNode
                    }
                    var l;
                    return t
                }
                readMoreHandler() {
                    var e, t;
                    const i = !this.state.isReadMoreButtonVisible;
                    this.setState({
                        isReadMoreButtonVisible: i
                    }), null === (e = (t = this.props).updateScrollPageState) || void 0 === e || e.call(t, {
                        isReadMoreButtonVisible: i
                    })
                }
                renderReadMore(e) {
                    const t = this.state.isReadMoreButtonVisible ? c.a.get("i18n").t("Read more") : c.a.get("i18n").t("Read less"),
                        i = this.state.isReadMoreButtonVisible ? c.a.get("i18n").t("Read more summary") : c.a.get("i18n").t("Read less summary");
                    return ["episode", "video"].includes(e.postType) && e.content ? (Object(ne.b)(), Object(F.c)(s.a, null, e => Object(F.c)("button", {
                        className: "article-content-read-more",
                        onClick: this.readMoreHandler,
                        "aria-label": e(i)
                    }, e(t)))) : null
                }
                render() {
                    const {
                        article: e,
                        isAmp: t,
                        className: i
                    } = this.props, n = ["wysiwyg"], o = ["episode", "video"].includes(e.postType), s = o, c = !o;
                    return "blog" === e.postType ? n.push("wysiwyg--blog-content") : n.push("wysiwyg--all-content"), t ? Object(F.c)(r.Fragment, null, Object(b.f)(e, s, null, c), this.props.extraContentBeforeSource, this.props.showArticleSource && Object(F.c)(ae.a, {
                        source: e.source
                    })) : Object(F.c)(r.Fragment, null, s && this.state.isReadMoreButtonVisible && this.renderReadMore(e), this.state.newsletterBeacon && Object(l.createPortal)(Object(F.c)(u.a, {
                        useHook: m.a
                    }, t => {
                        let {
                            getNextNewsletterFromProps: i
                        } = t;
                        return Object(F.c)(ie.a, {
                            newsletter: () => i(e),
                            gaEventLabel: "Article Page"
                        })
                    }), this.state.newsletterBeacon), Object(F.c)("div", {
                        className: a()(i, n, {
                            "u-hidden": s && this.state.isReadMoreButtonVisible
                        }),
                        "aria-live": "polite",
                        "aria-atomic": !0,
                        ref: e => (this.wysiwygContainer = e, this.processWysiwygContent(e, !o))
                    }, Object(F.c)(te, {
                        article: e
                    })), s && !this.state.isReadMoreButtonVisible && this.renderReadMore(e), this.props.extraContentBeforeSource, this.props.showArticleSource && Object(F.c)(ae.a, {
                        source: e.source
                    }))
                }
            }
            re.defaultProps = {
                showArticleSource: !1,
                showNewsletter: !0
            }, re.contextType = d.a;
            t.a = re
        },
        YWb6: function(e, t, i) {},
        YZKq: function(e, t, i) {
            "use strict";
            t.a = i.p + "static/media/world-cup-flag-bar-desktop.ce3ca4a7.png"
        },
        ZcAL: function(e, t) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "statsperformCompetitionsQuery"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "list"
                            },
                            name: {
                                kind: "Name",
                                value: "statsperformCompetitions"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "mapping"
                            },
                            name: {
                                kind: "Name",
                                value: "statsperformCompetitionsMapping"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }, {
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "statsperformSeasonsQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "competition"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "list"
                            },
                            name: {
                                kind: "Name",
                                value: "statsperformSeasons"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "competition"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "competition"
                                    }
                                }
                            }],
                            directives: []
                        }]
                    }
                }, {
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "statsperformTournamentQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "competition"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "season"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "matches"
                            },
                            name: {
                                kind: "Name",
                                value: "statsperformMatches"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "competition"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "competition"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "season"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "season"
                                    }
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "teams"
                            },
                            name: {
                                kind: "Name",
                                value: "statsperformTeams"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "season"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "season"
                                    }
                                }
                            }],
                            directives: []
                        }]
                    }
                }, {
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "statsperformMatchQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "match"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sportType"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "info"
                            },
                            name: {
                                kind: "Name",
                                value: "statsperformMatchInfo"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "match"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "match"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "sportType"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "sportType"
                                    }
                                }
                            }],
                            directives: []
                        }]
                    }
                }, {
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "statsperformFixturesQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "date"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sportType"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        },
                        directives: []
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sportID"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        },
                        directives: []
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "fixtures"
                            },
                            name: {
                                kind: "Name",
                                value: "statsperformFixtures"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "date"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "date"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "sportType"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "sportType"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "sportID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "sportID"
                                    }
                                }
                            }],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 746
                }
            };
            var n = {};

            function a(e, t) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var n = e.definitions[i];
                    if (n.name && n.name.value == t) return n
                }
            }

            function r(e, t) {
                var i = {
                    kind: e.kind,
                    definitions: [a(e, t)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var r = n[t] || new Set,
                    o = new Set,
                    l = new Set;
                for (r.forEach((function(e) {
                        l.add(e)
                    })); l.size > 0;) {
                    var s = l;
                    l = new Set, s.forEach((function(e) {
                        o.has(e) || (o.add(e), (n[e] || new Set).forEach((function(e) {
                            l.add(e)
                        })))
                    }))
                }
                return o.forEach((function(t) {
                    var n = a(e, t);
                    n && i.definitions.push(n)
                })), i
            }
            i.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    ! function e(t, i) {
                        if ("FragmentSpread" === t.kind) i.add(t.name.value);
                        else if ("VariableDefinition" === t.kind) {
                            var n = t.type;
                            "NamedType" === n.kind && i.add(n.name.value)
                        }
                        t.selectionSet && t.selectionSet.selections.forEach((function(t) {
                            e(t, i)
                        })), t.variableDefinitions && t.variableDefinitions.forEach((function(t) {
                            e(t, i)
                        })), t.definitions && t.definitions.forEach((function(t) {
                            e(t, i)
                        }))
                    }(e, t), n[e.name.value] = t
                }
            })), e.exports = i, e.exports.statsperformCompetitionsQuery = r(i, "statsperformCompetitionsQuery"), e.exports.statsperformSeasonsQuery = r(i, "statsperformSeasonsQuery"), e.exports.statsperformTournamentQuery = r(i, "statsperformTournamentQuery"), e.exports.statsperformMatchQuery = r(i, "statsperformMatchQuery"), e.exports.statsperformFixturesQuery = r(i, "statsperformFixturesQuery")
        },
        b49R: function(e, t, i) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = i("VBdi"),
                r = n(i("5jjk")),
                o = i("G8w2"),
                l = {
                    cloneElement: a.cloneElement,
                    createElement: a.createElement,
                    isValidElement: a.isValidElement
                };

            function s(e) {
                return o.PRESERVE_CUSTOM_ATTRIBUTES && "tag" === e.type && (0, o.isCustomComponent)(e.name, e.attribs)
            }
            t.default = function e(t, i) {
                for (var n = [], a = "function" === typeof(null === i || void 0 === i ? void 0 : i.replace), c = (null === i || void 0 === i ? void 0 : i.transform) || o.returnFirstArg, d = (null === i || void 0 === i ? void 0 : i.library) || l, u = d.cloneElement, m = d.createElement, p = d.isValidElement, v = t.length, b = 0; b < v; b++) {
                    var f = t[b];
                    if (a) {
                        var h = i.replace(f);
                        if (p(h)) {
                            v > 1 && (h = u(h, {
                                key: h.key || b
                            })), n.push(c(h, f, b));
                            continue
                        }
                    }
                    if ("text" !== f.type) {
                        var g = f,
                            k = {};
                        s(g) ? ((0, o.setStyleProp)(g.attribs.style, g.attribs), k = g.attribs) : g.attribs && (k = (0, r.default)(g.attribs, g.name));
                        var y = void 0;
                        switch (f.type) {
                            case "script":
                            case "style":
                                f.children[0] && (k.dangerouslySetInnerHTML = {
                                    __html: f.children[0].data
                                });
                                break;
                            case "tag":
                                "textarea" === f.name && f.children[0] ? k.defaultValue = f.children[0].data : f.children && f.children.length && (y = e(f.children, i));
                                break;
                            default:
                                continue
                        }
                        v > 1 && (k.key = b), n.push(c(m(f.name, k, y), f, b))
                    } else {
                        var O = !f.data.trim().length;
                        if (O && f.parent && !(0, o.canTextBeChildOfNode)(f.parent)) continue;
                        if ((null === i || void 0 === i ? void 0 : i.trim) && O) continue;
                        n.push(c(f.data, f, b))
                    }
                }
                return 1 === n.length ? n[0] : n
            }
        },
        b8zw: function(e, t, i) {
            "use strict";
            var n = i("FQxg"),
                a = i("/WA2"),
                r = i("VBdi"),
                o = i.n(r),
                l = i("N4w9"),
                s = i("CjPR"),
                c = i.n(s),
                d = i("P/sV"),
                u = i("A81W"),
                m = i("9N7U"),
                p = i("dVLG");
            const v = Object(a.a)({
                    resolved: {},
                    chunkName: () => "home-page-card-collection-flat",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!i.m[t]
                    },
                    importAsync: () => i.e(32).then(i.bind(null, "sty9")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return i(t)
                    },
                    resolve() {
                        return "sty9"
                    }
                }),
                b = e => {
                    var t;
                    let {
                        previewID: i,
                        host: a,
                        article: o,
                        isAmp: s
                    } = e;
                    const b = Object(d.a)();
                    let f = Object(r.useContext)(l.b);
                    f = null !== (t = f) && void 0 !== t ? t : a;
                    const {
                        loading: h,
                        error: g,
                        data: k
                    } = Object(n.b)(c.a, {
                        fetchPolicy: Object(m.getFetchPolicy)(!!i),
                        nextFetchPolicy: Object(m.getNextFetchPolicy)(!!i),
                        errorPolicy: Object(m.getErrorPolicy)(),
                        variables: {
                            preview: i,
                            isAtf: !1
                        }
                    });
                    if (h || g) return null;
                    const {
                        brandedEventCollection: y
                    } = k.homepage;
                    if (!y) return null;
                    const O = [...o.categories, ...o.tags].filter(e => !0 === e.homePageEvent),
                        N = {};
                    for (const n of O) n.link && (N[n.link] = n);
                    const j = y.find(e => e.uri && N[e.uri]);
                    if (!j) return null;
                    const {
                        title: S,
                        termTitle: w,
                        uri: T,
                        posts: A,
                        customBrandingImage: _,
                        customTimerData: x
                    } = j;
                    let F = S;
                    S === w && (F = u.a.t("Top News"));
                    const E = b ? null === _ || void 0 === _ ? void 0 : _.mobile : null === _ || void 0 === _ ? void 0 : _.desktop;
                    return Object(p.c)(v, {
                        articles: A,
                        imageData: E,
                        host: f,
                        moreText: u.a.t("Browse all coverage"),
                        moreLink: T,
                        title: w,
                        customTimerData: x,
                        cardSectionTitle: F,
                        isBrandedEventCollectionCard: !0,
                        isAmp: s
                    })
                };
            t.a = b
        },
        bQAu: function(e, t, i) {
            "use strict";
            var n = i("VBdi"),
                a = i.n(n),
                r = i("vUkw"),
                o = i.n(r),
                l = i("ZDfq"),
                s = i("kXcp"),
                c = i("ezFu"),
                d = i("KthT"),
                u = i("aPqV"),
                m = i("Rlgr"),
                p = i("cnol"),
                v = i("rYNr"),
                b = i("dVLG");
            const f = (e, t) => Object(b.c)("figure", {
                className: "article-featured-image"
            }, Object(b.c)(v.a, {
                url: e.sourceUrl,
                sizeNames: ["arc-image-3-2-120", "arc-image-3-2-270", "arc-image-3-2-375", "arc-image-3-2-570", "arc-image-3-2-770"],
                width: 770,
                height: 513,
                sources: e.sizes,
                alt: o()(e.alt, l.summaryHtml)
            }), t && Object(b.c)("figcaption", {
                dangerouslySetInnerHTML: {
                    __html: o()(t, l.summaryHtml)
                }
            }));
            t.a = e => {
                var t;
                const {
                    article: {
                        featuredCaption: i,
                        featuredImage: n,
                        video: r,
                        featuredYoutube: o,
                        featuredDataWrapperIframe: l,
                        customFields: v,
                        galleryMedia: h
                    }
                } = e, {
                    source: g,
                    accountId: k,
                    videoID: y,
                    youtubeChannelID: O,
                    youtubeVideoID: N
                } = (null === (t = e.article) || void 0 === t ? void 0 : t.featuredLivestream) || {}, j = "brightcove" === g && k && y, S = "youtube" === g && O || "youtube_video" === g && N;
                return Object(s.b)("featured-livestream") && (j || S) ? (e => {
                    const {
                        source: t,
                        accountId: i,
                        videoID: n,
                        youtubeChannelID: a,
                        youtubeVideoID: r
                    } = e;
                    return Object(b.c)("div", {
                        className: "article__featured-video"
                    }, "brightcove" === t ? Object(b.c)("amp-brightcove", {
                        "data-account": i,
                        "data-player-id": Object(u.c)(i),
                        "data-video-id": n,
                        layout: "responsive",
                        height: 270,
                        width: 480
                    }) : null, "youtube" === t ? Object(b.c)("amp-youtube", {
                        "data-live-channelid": a,
                        layout: "responsive",
                        height: 270,
                        width: 480
                    }) : null, "youtube_video" === t ? Object(b.c)("amp-youtube", {
                        "data-videoid": r,
                        layout: "responsive",
                        height: 270,
                        width: 480
                    }) : null)
                })(e.article.featuredLivestream) : r && (r.id || o) ? ((e, t) => {
                    const i = Object(u.d)(null === e || void 0 === e ? void 0 : e.accountId);
                    return Object(b.c)(a.a.Fragment, null, Object(b.c)("div", {
                        className: "article__featured-video"
                    }, e.id ? Object(b.c)("amp-brightcove", {
                        "data-account": i,
                        "data-player-id": Object(u.c)(i),
                        "data-video-id": e.id,
                        layout: "responsive",
                        height: 270,
                        width: 480
                    }) : null, !e.id && t ? Object(b.c)("amp-youtube", {
                        "data-videoid": Object(d.g)(t),
                        layout: "responsive",
                        height: 270,
                        width: 480
                    }) : null))
                })(r, o) : l ? (w = l, T = n && n.sourceUrl && f(n, i), Object(b.c)(m.a, {
                    iframe: w,
                    isAmp: !0,
                    fallback: T
                })) : (null === h || void 0 === h ? void 0 : h.length) > 0 ? Object(b.c)(p.a, {
                    galleryMedia: h,
                    infinite: !0,
                    isAmp: !0
                }) : n && n.sourceUrl ? Object(c.b)(v) ? null : f(n, i) : null;
                var w, T
            }
        },
        bgp4: function(e, t, i) {},
        bogy: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = i("VBdi"),
                o = i.n(r),
                l = i("d4yW"),
                s = i("7RPU"),
                c = i("8Ffx"),
                d = i("pbOP"),
                u = i("9N7U"),
                m = i("us/n"),
                p = i("AYes"),
                v = i("NB/C"),
                b = i("gYwD"),
                f = i("evfn"),
                h = i("GYGN"),
                g = (i("WtrV"), i("dVLG"));
            const k = e => e && Array.isArray(e.source) ? e.source.filter(e => e.featuredTaxonomy && e.name).map((e, t) => Object(g.c)("span", {
                    className: "article-feat-src",
                    key: t
                }, e.name)) : null,
                y = e => {
                    var t, i;
                    let {
                        article: n,
                        showGravatar: o,
                        isAmp: y,
                        suppressDates: O,
                        showByPrefix: N,
                        className: j
                    } = e;
                    const S = Array.isArray(n.author) && n.author.length > 0,
                        w = n.showAuthor || "gallery" === n.postType,
                        T = null === (t = n.displayPublishDate) || void 0 === t || t,
                        A = ((e, t, i, n) => {
                            var a, r, o;
                            return e ? !!(t && i && (null === (a = n.writeInCoAuthor) || void 0 === a ? void 0 : a.name) || n.author.length > 1 || (null === (r = n.writeInCoAuthor) || void 0 === r ? void 0 : r.name)) : !!(t && i || (null === (o = n.writeInCoAuthor) || void 0 === o ? void 0 : o.name))
                        })(o, S, w, n) ? ((e, t, i) => {
                            if (!e) return null;
                            let n = [...e.author];
                            return n = Object(u.insertWriteInCoAuthorNameIntoAuthors)(n, e.writeInCoAuthor), Object(g.c)("div", {
                                className: "article-author-name"
                            }, i && Object(d.e)() && Object(g.c)("span", {
                                className: "article-by"
                            }, Object(g.c)(l.a, null, "By"), "\xa0"), n.map((e, i) => {
                                const a = i < n.length - 1;
                                let o = Object(u.isRTLSite)() ? Object(g.c)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: "\u060c&nbsp;"
                                    }
                                }) : Object(g.c)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: ",&nbsp;"
                                    }
                                });
                                return Object(u.isRTLSite)() || i !== n.length - 2 || (o = Object(g.c)("span", null, Object(g.c)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: "&nbsp;"
                                    }
                                }), Object(g.c)(l.a, null, "and"), Object(g.c)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: "&nbsp;"
                                    }
                                }))), e.id ? Object(g.c)("span", {
                                    className: "article-author-name-item",
                                    key: e.id
                                }, Object(g.c)(p.a, {
                                    author: e,
                                    key: e.slug,
                                    isAmp: t,
                                    className: ""
                                }), a && o) : Object(g.c)(r.Fragment, {
                                    key: e
                                }, Object(g.c)("span", {
                                    className: "article-author-name-item",
                                    dangerouslySetInnerHTML: {
                                        __html: Object(c.b)(e)
                                    }
                                }), a && o)
                            }), k(e))
                        })(n, y, N) : k(n),
                        _ = n.modified_gmt && "on" === n.updatedDate,
                        x = !A || Array.isArray(A) && 0 === A.length,
                        F = (O || !T) && !_,
                        E = a()("article-b-l", j);
                    if (!o && x && F) return null;
                    const D = !x || n.author.length > 0 && o,
                        P = a()({
                            "article-author-tagline": !0,
                            "inline-tagline": x && 1 === n.author.length && o
                        });
                    return Object(g.c)("div", {
                        className: E
                    }, o && !(null === (i = n.writeInCoAuthor) || void 0 === i ? void 0 : i.name) && 1 === n.author.length && (M = n.author, I = y ? m.a : h.a, M && 0 !== M.length ? Object(g.c)(I, {
                        lazyLoading: !1,
                        authorList: M,
                        showBiography: !Object(d.b)()
                    }) : null), A, D && (null === n || void 0 === n ? void 0 : n.authorTagline) && Object(g.c)("div", {
                        className: P
                    }, Object(g.c)("p", null, n.authorTagline)), !O && (e => {
                        var t;
                        if (!e) return null;
                        const i = "liveblog" === e.postType,
                            n = i ? Object(s.k)(e) : "",
                            a = e.modified_gmt && "on" === e.updatedDate,
                            r = null === (t = e.displayPublishDate) || void 0 === t || t;
                        return Object(d.b)() || Object(d.f)() ? Object(g.c)(f.a, {
                            date: e.date,
                            updatedDate: e.modified_gmt,
                            displayUpdatedDate: a,
                            displayPublishDate: r,
                            latestLiveblogUpdateDate: n
                        }) : Object(g.c)("div", {
                            className: "article-dates"
                        }, r && Object(g.c)(v.a, {
                            date: e.date
                        }), a && Object(g.c)(b.a, {
                            date: n || e.modified_gmt,
                            displayPublishDate: r,
                            displayMilitaryTime: i
                        }))
                    })(n));
                    var M, I
                };
            y.defaultProps = {
                isAmp: !1,
                suppressDates: !1,
                showByPrefix: !0
            }, t.a = o.a.memo(y)
        },
        cv48: function(e, t, i) {
            "use strict";
            i("VBdi");
            var n = i("9mJr"),
                a = i("YcvO"),
                r = i("nlM2"),
                o = i("h9Xs"),
                l = i("dVLG");
            t.a = e => {
                let {
                    article: t
                } = e;
                const i = Object(r.a)(),
                    s = null === i || void 0 === i ? void 0 : i.state,
                    {
                        position: c,
                        articlePosition: d,
                        siteSection: u,
                        siteModule: m,
                        recirculationSource: p,
                        customTopics: v,
                        attributionToken: b
                    } = null !== s && void 0 !== s ? s : {},
                    {
                        authorsList: f,
                        date: h,
                        id: g,
                        keywords: k,
                        modifiedGMT: y,
                        postLabelList: O,
                        postType: N,
                        primaryTag: j,
                        primaryTopic: S,
                        programsList: w,
                        slug: T,
                        link: A,
                        sourceTaxonomy: _,
                        tagsList: x,
                        taxonomyTerms: F,
                        title: E,
                        topics: D,
                        videoId: P,
                        whereList: M,
                        whoList: I,
                        trendingList: C,
                        internalTaxonomies: V,
                        internalReporting: L,
                        featuredYoutube: R,
                        isQuickRead: B
                    } = Object(o.a)(t),
                    U = new URLSearchParams(i.search),
                    z = p || U.get("traffic_source"),
                    H = U.get("_preview"),
                    Y = P || R || Object(a.c)(t, !1),
                    G = v || D;
                return Object(l.c)(n.a, null, V && Object(l.c)("meta", {
                    name: "internalTaxonomies",
                    content: V
                }), L && Object(l.c)("meta", {
                    name: "internalReporting",
                    content: L
                }), G && Object(l.c)("meta", {
                    name: "topics",
                    content: G
                }), S && Object(l.c)("meta", {
                    name: "primaryTopic",
                    content: S
                }), M && Object(l.c)("meta", {
                    name: "where",
                    content: M
                }), I && Object(l.c)("meta", {
                    name: "taxonomy-who",
                    content: I
                }), C && Object(l.c)("meta", {
                    name: "taxonomy-trending",
                    content: C
                }), x && Object(l.c)("meta", {
                    name: "tags",
                    content: x
                }), j && Object(l.c)("meta", {
                    name: "primaryTag",
                    content: j
                }), k && Object(l.c)("meta", {
                    name: "keywords",
                    content: k
                }), O && Object(l.c)("meta", {
                    name: "postLabel",
                    content: O
                }), F && Object(l.c)("meta", {
                    name: "taxonomyTerms",
                    content: F
                }), w && Object(l.c)("meta", {
                    name: "programTaxonomy",
                    content: w
                }), h && Object(l.c)("meta", {
                    name: "publishedDate",
                    content: h
                }), y && Object(l.c)("meta", {
                    name: "lastDate",
                    content: y
                }), N && Object(l.c)("meta", {
                    name: "contentType",
                    content: B ? "quickReads" : N
                }), f && Object(l.c)("meta", {
                    name: "displayAuthors",
                    content: f
                }), _ && Object(l.c)("meta", {
                    name: "sourceTaxonomy",
                    content: _
                }), E && Object(l.c)("meta", {
                    name: "pageTitle",
                    content: E
                }), P && Object(l.c)("meta", {
                    name: "featuredMedia",
                    content: P
                }), g && Object(l.c)("meta", {
                    name: "postID",
                    content: g
                }), A && Object(l.c)("meta", {
                    name: "postLink",
                    content: A
                }), T && Object(l.c)("meta", {
                    name: "articleSlug",
                    content: T
                }), d && Object(l.c)("meta", {
                    name: "articlePosition",
                    content: d
                }), c && Object(l.c)("meta", {
                    name: "position",
                    content: c
                }), u && Object(l.c)("meta", {
                    name: "siteSection",
                    content: u
                }), m && Object(l.c)("meta", {
                    name: "siteModule",
                    content: m
                }), z && Object(l.c)("meta", {
                    name: "recirculationSource",
                    content: z
                }), Y && Object(l.c)("meta", {
                    name: "hasVideo",
                    content: !0
                }), b && Object(l.c)("meta", {
                    name: "attributionToken",
                    content: b
                }), H && Object(l.c)("meta", {
                    name: "isPreview",
                    content: !0
                }))
            }
        },
        eKx3: function(e, t, i) {
            "use strict";
            var n = i("VBdi"),
                a = i.n(n),
                r = i("MwNz"),
                o = i("N4w9"),
                l = i("6xHM"),
                s = i("Wz/t"),
                c = i("18NH"),
                d = (i("/c3v"), i("dVLG"));
            t.a = e => {
                var t, i;
                let {
                    menuItems: n,
                    seoDescription: u,
                    id: m,
                    customSeoMeta: p
                } = e;
                const v = null === (t = Object(o.d)().components.sites) || void 0 === t || null === (i = t.Midan) || void 0 === i ? void 0 : i.logo;
                return Object(d.c)(a.a.Fragment, null, Object(d.c)(l.a, {
                    classes: "branding-midan",
                    header: Object(d.c)(s.a, {
                        header: Object(d.c)("img", {
                            src: v,
                            alt: r.a.get("i18n").t("Midan logo"),
                            loading: "lazy",
                            className: "branding-midan__image"
                        }),
                        url: "/midan",
                        className: "branding-midan__image-heading",
                        pageTemplate: "midan",
                        id: m,
                        title: "Midan logo"
                    })
                }), n.length && Object(d.c)(c.b, {
                    menu: n,
                    defaultTitle: r.a.get("i18n").t("midan"),
                    seoMetaDescription: u,
                    customSeoMeta: p
                }))
            }
        },
        eZjN: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.camelCase = void 0;
            var n = /^--[a-zA-Z0-9-]+$/,
                a = /-([a-z])/g,
                r = /^[^-]+$/,
                o = /^-(webkit|moz|ms|o|khtml)-/,
                l = /^-(ms)-/,
                s = function(e, t) {
                    return t.toUpperCase()
                },
                c = function(e, t) {
                    return "".concat(t, "-")
                };
            t.camelCase = function(e, t) {
                return void 0 === t && (t = {}),
                    function(e) {
                        return !e || r.test(e) || n.test(e)
                    }(e) ? e : (e = e.toLowerCase(), (e = t.reactCompat ? e.replace(l, c) : e.replace(o, c)).replace(a, s))
            }
        },
        eu73: function(e, t, i) {
            "use strict";
            t.a = i.p + "static/media/world-cup-flag-bar-mobile.9af806dd.png"
        },
        evfn: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = i("cMIy"),
                o = i.n(r),
                l = (i("zQQ7"), i("yw+z"), i("ENmq")),
                s = i.n(l),
                c = i("ZKOF"),
                d = i.n(c),
                u = i("sbnR"),
                m = i.n(u),
                p = i("VBdi"),
                v = i.n(p),
                b = i("7RPU"),
                f = i("ekvm"),
                h = i("pbOP"),
                g = (i("VJ3i"), i("dVLG"));
            o.a.extend(m.a), o.a.extend(s.a), o.a.extend(d.a);
            const k = e => {
                    let {
                        withCharacter: t = !0
                    } = e;
                    const i = a()("separator", {
                        "separator--withoutCharacter": !t
                    });
                    return Object(g.c)(p.Fragment, null, Object(g.c)("span", {
                        className: i + " separator--mobile u-hidden--desktop"
                    }, t && "-"), Object(g.c)("span", {
                        className: i + " separator--desktop u-hidden--mobile"
                    }, t && "|"))
                },
                y = e => {
                    let {
                        date: t,
                        updatedDate: i,
                        displayPublishDate: n,
                        displayUpdatedDate: a,
                        latestLiveblogUpdateDate: r = ""
                    } = e;
                    const l = Object(b.i)();
                    return Object(g.c)("div", {
                        className: "article-dates"
                    }, Object(g.c)("span", null, n && Object(g.c)("span", {
                        className: "article-dates__published"
                    }, Object(b.v)(t).format(Object(b.i)())), a && ((e, t, i, n) => {
                        const a = n ? Object(b.q)(n, !1, !0) : Object(b.q)(e),
                            r = o.a.utc(e),
                            l = o()().utc().diff(r, "day") < 1;
                        return Object(g.c)(p.Fragment, null, i && Object(g.c)(k, null), Object(g.c)("span", {
                            className: "article-dates__updated"
                        }, Object(h.e)() && l ? Object(b.s)(r) : Object(b.r)(e, t), Object(g.c)(k, {
                            withCharacter: f.a.isMobile()
                        }), a))
                    })(i, l, n, r)))
                };
            y.defaultProps = {
                displayUpdatedDate: !1,
                displayPublishDate: !0
            }, t.a = v.a.memo(y)
        },
        "fKI+": function(e, t, i) {
            "use strict";
            i("VBdi");
            var n = i("xAi6"),
                a = i("kXcp"),
                r = i("HXpp"),
                o = (i("4gXw"), i("dVLG"));
            t.a = () => Object(a.b)("advertisements/status") && Object(a.b)("wallpaper-ad/status") ? Object(o.c)("div", {
                id: "wallpaper-ad",
                className: "wallpaper-ad small",
                "data-testid": "wallpaper-ad"
            }, Object(o.c)("div", {
                className: "wallpaper-ad--wrapper"
            }, Object(o.c)("div", {
                id: "wallpaper-ad--left",
                className: "wallpaper-ad--left",
                "data-testid": "wallpaper-ad--left"
            }), Object(o.c)("div", {
                id: "wallpaper-ad--right",
                className: "wallpaper-ad--right",
                "data-testid": "wallpaper-ad--right"
            })), Object(o.c)(r.a, {
                adUnit: "/5287/aljazeera_china/desktop_wallpaper_1x1",
                bannerType: n.AD_SLOTS.wallpaper,
                hideTitle: !0
            })) : null
        },
        fZlt: function(e, t, i) {},
        "g+Mc": function(e, t, i) {},
        gYwD: function(e, t, i) {
            "use strict";
            var n = i("cMIy"),
                a = i.n(n),
                r = i("VBdi"),
                o = i("MwNz"),
                l = i("7RPU"),
                s = i("pbOP"),
                c = (i("fZlt"), i("dVLG"));
            const d = e => {
                let {
                    date: t,
                    displayPublishDate: i,
                    displayMilitaryTime: n
                } = e;
                const d = a.a.utc(t),
                    u = a()().utc().diff(d, "day") < 1,
                    m = o.a.get("i18n"),
                    p = n ? `(${Object(l.q)(t,!0,!0)})` : Object(l.q)(t);
                return Object(c.c)("div", {
                    className: "date-updated"
                }, i && Object(c.c)("div", {
                    className: "date-updated__separator"
                }, "|"), Object(c.c)("div", {
                    className: "date-updated__lastupdated"
                }, m.t("Last Updated"), ":\xa0"), Object(s.e)() && u ? Object(c.c)("div", {
                    className: "date-updated__date"
                }, d.fromNow()) : Object(c.c)(r.Fragment, null, Object(c.c)("div", {
                    className: "date-updated__date"
                }, Object(l.v)(t).format(Object(l.i)())), Object(c.c)("div", {
                    className: "date-updated__time"
                }, p)))
            };
            d.defaultProps = {
                displayPublishDate: !0
            }, t.a = d
        },
        gpRv: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = (i("VBdi"), i("P/sV")),
                o = i("7RPU"),
                l = i("SWuB"),
                s = i("poX3"),
                c = i("pV/C"),
                d = (i("6gjh"), i("dVLG"));
            const u = e => {
                    let {
                        article: t,
                        isAmp: i
                    } = e;
                    const n = Object(r.a)();
                    if (!t) return null;
                    const l = m(t, n);
                    if (null === t || void 0 === t ? void 0 : t.isOlympicsSportsVersion) return Object(d.c)("div", {
                        className: "container container--block"
                    }, Object(d.c)("div", {
                        className: "container__inner container__inner--no-pad-mobile-vert m--t-20 m--b-20 m--b-mobile-0"
                    }, Object(d.c)(c.a, {
                        title: "Paris \xa0 \xa0 Olympics 2024",
                        date: null === t || void 0 === t ? void 0 : t.OlympicsSportsMatchDate,
                        sport_title: null === t || void 0 === t ? void 0 : t.OlympicsSportTypeName,
                        sport_id: null === t || void 0 === t ? void 0 : t.OlympicsSportTypeID,
                        description: "[Matches are in Paris time]",
                        isAmp: i
                    })));
                    if ((null === t || void 0 === t ? void 0 : t.isSportsVersion) && "football" === (null === t || void 0 === t ? void 0 : t.sportType) && "4hshmd65vxz59k2e1ygl05d78" === (null === t || void 0 === t ? void 0 : t.sportsSeasonId)) {
                        const e = Object(o.v)(t.date).format("YYYY-MM-DD");
                        return Object(d.c)("div", {
                            className: "container container--block"
                        }, Object(d.c)("div", {
                            className: "container__inner container__inner--no-pad-mobile-vert m--t-20 m--b-20 m--b-mobile-0"
                        }, Object(d.c)(c.a, {
                            title: "Paris \xa0 \xa0 Olympics 2024",
                            date: e,
                            sport_title: "Football",
                            sport_id: "sp1",
                            description: "[Matches are in Paris time]",
                            isAmp: i
                        })))
                    }
                    return l ? Object(d.c)(s.a, {
                        markup: l,
                        className: a()("above-article-featured-area", "from-" + (t.postType || "article"))
                    }) : null
                },
                m = (e, t) => {
                    var i, n, a;
                    if (!["opinion", "post", "liveblog", "blog"].includes(e.postType)) return !1;
                    let r = {};
                    const o = Object(l.c)(e, "tags", !1);
                    if (r = (null === o || void 0 === o ? void 0 : o.additionalArticleEmbeds) || {}, !(null === (i = r) || void 0 === i ? void 0 : i.allowEmbeds)) {
                        const t = Object(l.c)(e, "categories", !1);
                        r = (null === t || void 0 === t ? void 0 : t.additionalArticleEmbeds) || {}
                    }
                    return t ? null === (n = r) || void 0 === n ? void 0 : n.aboveFeaturedAreaForMobile : null === (a = r) || void 0 === a ? void 0 : a.aboveFeaturedArea
                };
            u.defaultProps = {
                isAmp: !1
            }, t.a = u
        },
        hXB9: function(e, t, i) {},
        i5Xp: function(e, t, i) {
            "use strict";
            t.a = e => {
                var t, i, n, a, r, o, l, s, c, d, u, m, p, v, b, f, h;
                const g = (null === (t = e.theme) || void 0 === t || null === (i = t.fonts) || void 0 === i ? void 0 : i.main) + " !important",
                    k = (null === (n = e.theme) || void 0 === n || null === (a = n.fonts) || void 0 === a ? void 0 : a.articleBody) + " !important";
                return {
                    wysiwyg: {
                        fontFamily: k,
                        fontSize: (null === (r = e.theme) || void 0 === r || null === (o = r.fonts) || void 0 === o ? void 0 : o.articleBodySize) + "px !important",
                        "@media (max-width: 768.98px)": {
                            fontSize: (null === (l = e.theme) || void 0 === l || null === (s = l.fonts) || void 0 === s ? void 0 : s.articleBodySizeMobile) + "px !important"
                        },
                        blockquote: {
                            fontFamily: k
                        },
                        p: {
                            fontFamily: k
                        },
                        h1: {
                            fontFamily: g
                        },
                        h2: {
                            fontSize: (null === (c = e.theme) || void 0 === c || null === (d = c.fonts) || void 0 === d ? void 0 : d.h2FontSize) + "px",
                            fontFamily: g
                        },
                        h3: {
                            fontSize: (null === (u = e.theme) || void 0 === u || null === (m = u.fonts) || void 0 === m ? void 0 : m.h3FontSize) + "px",
                            fontFamily: g
                        },
                        h4: {
                            fontSize: (null === (p = e.theme) || void 0 === p || null === (v = p.fonts) || void 0 === v ? void 0 : v.h4FontSize) + "px",
                            fontFamily: g
                        },
                        h5: {
                            fontFamily: g
                        },
                        figure: {
                            fontFamily: g
                        },
                        a: {
                            color: null === e || void 0 === e || null === (b = e.theme) || void 0 === b ? void 0 : b.hyperlinkColor
                        },
                        "blockquote::after": {
                            backgroundColor: null === e || void 0 === e || null === (f = e.theme) || void 0 === f ? void 0 : f.primaryColor
                        },
                        "li::before": {
                            backgroundColor: null === e || void 0 === e || null === (h = e.theme) || void 0 === h ? void 0 : h.primaryColor
                        }
                    }
                }
            }
        },
        iFHR: function(e, t, i) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.htmlToDOM = t.domToReact = t.attributesToProps = t.Text = t.ProcessingInstruction = t.Element = t.Comment = void 0;
            var a = n(i("VvXL"));
            t.htmlToDOM = a.default;
            var r = n(i("5jjk"));
            t.attributesToProps = r.default;
            var o = n(i("b49R"));
            t.domToReact = o.default;
            var l = i("qylq");
            Object.defineProperty(t, "Comment", {
                enumerable: !0,
                get: function() {
                    return l.Comment
                }
            }), Object.defineProperty(t, "Element", {
                enumerable: !0,
                get: function() {
                    return l.Element
                }
            }), Object.defineProperty(t, "ProcessingInstruction", {
                enumerable: !0,
                get: function() {
                    return l.ProcessingInstruction
                }
            }), Object.defineProperty(t, "Text", {
                enumerable: !0,
                get: function() {
                    return l.Text
                }
            });
            var s = {
                lowerCaseAttributeNames: !1
            };
            t.default = function(e, t) {
                if ("string" !== typeof e) throw new TypeError("First argument must be a string");
                return e ? (0, o.default)((0, a.default)(e, (null === t || void 0 === t ? void 0 : t.htmlparser2) || s), t) : []
            }
        },
        iRkj: function(e, t, i) {
            "use strict";
            var n = i("96Qw"),
                a = i("9N7U");
            t.a = () => {
                const e = { ...Object(n.useLocation)()
                };
                return Object(a.getPlaylistID)(e)
            }
        },
        iaCl: function(e, t, i) {
            "use strict";
            var n = i("MwNz"),
                a = i("xAi6"),
                r = i("0B7w");
            t.a = function(e) {
                var t, i;
                let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                const l = null !== (t = null === a.AMPLITUDE_EXPERIMENTS || void 0 === a.AMPLITUDE_EXPERIMENTS || null === (i = a.AMPLITUDE_EXPERIMENTS[e]) || void 0 === i ? void 0 : i[n.a.get("APPLICATION_ENV")]) && void 0 !== t ? t : null,
                    s = Object(r.a)(l);
                var c;
                return o ? (null === s || void 0 === s ? void 0 : s.value) === o : null !== (c = null === s || void 0 === s ? void 0 : s.value) && void 0 !== c ? c : ""
            }
        },
        icih: function(e, t, i) {
            var n = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "AutomatedRelatedArticlesQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "tags"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "quantity"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "offset"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Int"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "excludeIds"
                                }
                            },
                            type: {
                                kind: "ListType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "articles"
                                },
                                name: {
                                    kind: "Name",
                                    value: "posts"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "tags"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "direction"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DESC"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "orderBy"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "DATE"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "quantity"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "postTypes"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: []
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "excludeIds"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "excludeIds"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "replacementHeadline"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "excerpt"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "link"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "date"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        alias: {
                                            kind: "Name",
                                            value: "postType"
                                        },
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "externalUrl"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "video"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "duration"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "author"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "link"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "featuredImage"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "mediaDetails"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "outsideImage"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "mediaDetails"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "programsDetails"
                                        },
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "galleryImagesCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 701
                    }
                },
                a = {};

            function r(e) {
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                }))
            }
            n.definitions = n.definitions.concat(r(i("tL9X").definitions)), n.definitions = n.definitions.concat(r(i("mhoN").definitions));
            var o = {};

            function l(e, t) {
                for (var i = 0; i < e.definitions.length; i++) {
                    var n = e.definitions[i];
                    if (n.name && n.name.value == t) return n
                }
            }
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    ! function e(t, i) {
                        if ("FragmentSpread" === t.kind) i.add(t.name.value);
                        else if ("VariableDefinition" === t.kind) {
                            var n = t.type;
                            "NamedType" === n.kind && i.add(n.name.value)
                        }
                        t.selectionSet && t.selectionSet.selections.forEach((function(t) {
                            e(t, i)
                        })), t.variableDefinitions && t.variableDefinitions.forEach((function(t) {
                            e(t, i)
                        })), t.definitions && t.definitions.forEach((function(t) {
                            e(t, i)
                        }))
                    }(e, t), o[e.name.value] = t
                }
            })), e.exports = n, e.exports.AutomatedRelatedArticlesQuery = function(e, t) {
                var i = {
                    kind: e.kind,
                    definitions: [l(e, t)]
                };
                e.hasOwnProperty("loc") && (i.loc = e.loc);
                var n = o[t] || new Set,
                    a = new Set,
                    r = new Set;
                for (n.forEach((function(e) {
                        r.add(e)
                    })); r.size > 0;) {
                    var s = r;
                    r = new Set, s.forEach((function(e) {
                        a.has(e) || (a.add(e), (o[e] || new Set).forEach((function(e) {
                            r.add(e)
                        })))
                    }))
                }
                return a.forEach((function(t) {
                    var n = l(e, t);
                    n && i.definitions.push(n)
                })), i
            }(n, "AutomatedRelatedArticlesQuery")
        },
        ioBQ: function(e, t, i) {},
        iqzs: function(e, t, i) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(i("oGiS")),
                r = i("F5Rs"),
                o = /<(![a-zA-Z\s]+)>/;
            t.default = function(e) {
                if ("string" !== typeof e) throw new TypeError("First argument must be a string");
                if (!e) return [];
                var t = e.match(o),
                    i = t ? t[1] : void 0;
                return (0, r.formatDOM)((0, a.default)(e), null, i)
            }
        },
        "j0/4": function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return T
            }));
            var n = i("FQxg"),
                a = i("AAFT"),
                r = i.n(a),
                o = (i("VBdi"), i("96Qw")),
                l = i("Ot6i"),
                s = i("rYNr"),
                c = i("w8RO"),
                d = i("8+YW"),
                u = i("C9Dh"),
                m = i("Pj4E"),
                p = i("Ne5u"),
                v = i("yDnS"),
                b = i("MwNz"),
                f = i("LkUN"),
                h = i.n(f),
                g = i("nlM2"),
                k = i("iRkj"),
                y = i("8Ffx"),
                O = i("ezFu"),
                N = i("9N7U"),
                j = i("SWuB"),
                S = (i("yKOh"), i("dVLG"));
            const w = e => {
                    var t, i, n, a;
                    let {
                        article: o,
                        isAmp: l,
                        analyticsMetaProps: u = {},
                        playlistID: f,
                        isCurrentlyPlaying: h = !1
                    } = e;
                    const g = Object(N.getPostLink)(o),
                        k = Object(O.a)(o),
                        j = b.a.get("i18n").t("Now showing");
                    let w = null;
                    return f && (w = "?playlist=" + f), Object(S.c)("article", {
                        className: r()("more-video-section__item u-clickable-card", {
                            "more-video-section__playlist-item": !!f,
                            "more-video-section__playlist-current": h
                        })
                    }, Object(S.c)("div", {
                        className: "more-video-section__item-content"
                    }, Object(S.c)("h3", {
                        className: "more-video-section__item-title"
                    }, Object(S.c)(d.a, {
                        to: g,
                        search: w,
                        className: "u-clickable-card__link",
                        article: o,
                        label: "More Video Section",
                        eventTarget: o.title,
                        analyticsMetaProps: u
                    }, Object(y.b)(Object(N.getReplacementHeadline)(o)), Object(S.c)(p.a, {
                        article: o
                    })))), Object(S.c)("div", {
                        className: "more-video-section__item-image"
                    }, l ? Object(S.c)(s.a, {
                        alt: k.alt,
                        url: null !== (t = k.sourceUrl) && void 0 !== t ? t : "",
                        sizeNames: ["arc-image-16-9-270", "arc-image-16-9-730"],
                        width: 270,
                        height: 180,
                        sources: k.sizes,
                        sizes: "(max-width: 124px) 124px, 124px",
                        layout: "responsive",
                        className: "responsive-image"
                    }) : Object(S.c)(m.a, {
                        alt: k.alt,
                        sizeNames: ["arc-image-16-9-270", "arc-image-16-9-730"],
                        sources: null !== (i = k.sizes) && void 0 !== i ? i : [],
                        url: null !== (n = k.sourceUrl) && void 0 !== n ? n : "",
                        lazyLoading: !0
                    }), h && Object(S.c)("div", {
                        className: "currently-playing-label"
                    }, j), Object(S.c)(v.a, {
                        duration: null === o || void 0 === o || null === (a = o.video) || void 0 === a ? void 0 : a.duration,
                        variant: "small"
                    })), h && Object(S.c)("div", {
                        className: "more-video-section__playlist-current-icon"
                    }, Object(S.c)(c.a, {
                        name: "play-arrow",
                        color: "primary",
                        size: 8,
                        viewBox: "0 0 8 8"
                    })))
                },
                T = e => {
                    let {
                        isAmp: t,
                        playlist: i
                    } = e;
                    const n = Object(k.a)(),
                        {
                            postName: a
                        } = Object(o.useParams)(),
                        s = null === i || void 0 === i ? void 0 : i.posts;
                    return Array.isArray(s) && 0 !== s.length ? Object(S.c)("aside", {
                        className: r()("more-video-section", {
                            "more-video-section__playlist": !!n
                        }),
                        "aria-labelledby": "more-video-section-title"
                    }, Object(S.c)("div", {
                        className: "u-hidden--mobile"
                    }, Object(S.c)("span", {
                        className: "more-video-section__playlist-label",
                        "aria-hidden": !0
                    }, b.a.get("i18n").t("Playlist")), Object(S.c)("h2", {
                        className: "more-video-section__playlist-title",
                        id: "more-video-section-title",
                        "aria-label": "Playlist " + i.title,
                        dangerouslySetInnerHTML: {
                            __html: Object(y.b)(i.title)
                        }
                    })), Object(S.c)("hr", null), Object(S.c)("ul", {
                        className: "more-video-section__list"
                    }, s.map((e, i) => Object(S.c)("li", {
                        key: "more-video-section-item-" + e.id
                    }, Object(S.c)(w, {
                        article: e,
                        listLayout: !0,
                        isAmp: t,
                        playlistID: n,
                        analyticsMetaProps: Object(l.d)({
                            recirculationSource: "Playlist",
                            articlePosition: i + 1
                        }),
                        isCurrentlyPlaying: decodeURIComponent(e.slug) === decodeURIComponent(a)
                    }))))) : null
                };
            t.b = e => {
                var t, i, a;
                let {
                    article: r,
                    isAmp: o
                } = e;
                const s = Object(g.a)(),
                    {
                        programs: c
                    } = r,
                    d = null !== (t = Object(j.b)(r)) && void 0 !== t ? t : {
                        slug: ""
                    },
                    m = null === c || void 0 === c ? void 0 : c[0],
                    p = Object(N.getPreviewID)(s),
                    {
                        query: v,
                        variables: f
                    } = function(e, t, i) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 7,
                            a = "",
                            r = "",
                            o = "";
                        return i ? (a = i.slug, r = "programs", o = "episode") : (a = t.slug, r = "categories", o = "video"), {
                            query: h.a,
                            variables: {
                                category: a,
                                categoryType: r,
                                quantity: n,
                                offset: 0,
                                postType: o,
                                exclude: [e]
                            }
                        }
                    }(r.id, d, m),
                    {
                        loading: k,
                        data: y,
                        error: O
                    } = Object(n.b)(v, {
                        variables: f,
                        fetchPolicy: Object(N.getFetchPolicy)(p)
                    }),
                    T = null !== (i = null === y || void 0 === y || null === (a = y.playlist) || void 0 === a ? void 0 : a.posts) && void 0 !== i ? i : null === y || void 0 === y ? void 0 : y.articles;
                if (k && !T) return Object(S.c)(u.a, null);
                if (!Array.isArray(T) || 0 === T.length || O) return null;
                const A = b.a.get("i18n"),
                    _ = m ? A.t("More episodes from program") : A.t("More video clips from the story");
                return Object(S.c)("aside", {
                    className: "more-video-section",
                    "aria-labelledby": "more-video-section-title"
                }, Object(S.c)("div", {
                    className: "more-video-section__header-wrapper"
                }, Object(S.c)("h2", {
                    className: "more-video-section__title",
                    id: "more-video-section-title"
                }, _)), Object(S.c)("hr", null), Object(S.c)("ul", {
                    className: "more-video-section__list"
                }, T.map((e, t) => Object(S.c)("li", {
                    key: "more-video-section-item-" + e.id
                }, Object(S.c)(w, {
                    article: e,
                    listLayout: !0,
                    isAmp: o,
                    analyticsMetaProps: Object(l.d)({
                        recirculationSource: (null === m || void 0 === m ? void 0 : m.slug) ? "More Episodes from" : "More Videos",
                        articlePosition: t + 1
                    })
                })))))
            }
        },
        j8Oj: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = (i("VBdi"), i("MwNz")),
                o = i("Ot6i"),
                l = i("TIVh"),
                s = i("RiWD"),
                c = i("BEYP"),
                d = (i("g+Mc"), i("dVLG"));
            const u = (e, t) => {
                    const i = r.a.get("i18n");
                    if (!e) return i.t("Most Read");
                    const n = i.t("Author");
                    return "opinion" === t && n === e ? i.t("More from", {
                        opinion: i.t("Opinion"),
                        sectionTitle: e
                    }) : i.t("More from", {
                        sectionTitle: e
                    })
                },
                m = e => {
                    const {
                        articleList: t,
                        className: i,
                        sectionTitle: n,
                        contentType: r,
                        isAmp: m,
                        id: p
                    } = e, v = a()(i, "article-pre-footer"), b = n ? "More From" : "Most Read";
                    return (null === t || void 0 === t ? void 0 : t.length) ? Object(d.c)(c.a, null, Object(d.c)("aside", {
                        className: v,
                        id: p,
                        "aria-labelledby": p + "-title"
                    }, Object(d.c)(l.a, {
                        title: u(n, r),
                        style: "dot",
                        id: p + "-title",
                        headingLevel: "h2",
                        className: "u-uppercase"
                    }), Object(d.c)("ul", {
                        className: "article-pre-footer__list"
                    }, t && Array.isArray(t) && t.map((e, t) => Object(d.c)("li", {
                        key: e.id
                    }, Object(d.c)(s.a, {
                        article: e,
                        isAmp: m,
                        position: t + 1,
                        label: b,
                        analyticsMetaProps: Object(o.d)({
                            recirculationSource: b
                        })
                    })))))) : null
                };
            m.defaultProps = {
                sectionTitle: "",
                id: "article-most-read"
            }, t.a = m
        },
        jiOX: function(e, t, i) {
            "use strict";
            i("VBdi");
            var n = i("pV/C"),
                a = i("VC/Y"),
                r = i("dVLG");
            class o extends a.a {
                condition(e, t) {
                    return "statsperform" === e.type && e.props.sport_type
                }
                transform(e, t) {
                    return Object(r.c)(n.a, e.props)
                }
            }
            t.a = o
        },
        kBkb: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = i("VBdi"),
                o = i.n(r),
                l = i("MwNz"),
                s = (i("72Do"), i("dVLG"));
            t.a = e => {
                let {
                    headingElement: t
                } = e;
                const [i, n] = o.a.useState(!1), c = a()("heading-anchor-button", {
                    "heading-anchor-button--clicked": i
                }), d = l.a.get("i18n");
                return Object(r.cloneElement)(t, {
                    className: "heading-with-anchor"
                }, Object(s.c)(o.a.Fragment, null, t.props.children, Object(s.c)("span", {
                    onClick: () => {
                        const e = `${window.location.origin}${window.location.pathname}#${t.props.id}`;
                        navigator.clipboard.writeText(e), n(!0), setTimeout(() => n(!1), 2e3)
                    },
                    title: d.t("Copy Link"),
                    className: c
                }, Object(s.c)("svg", {
                    width: "24px",
                    height: "24px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, Object(s.c)("path", {
                    d: "M8 6.75C5.10051 6.75 2.75 9.10051 2.75 12C2.75 14.8995 5.10051 17.25 8 17.25H9C9.41421 17.25 9.75 17.5858 9.75 18C9.75 18.4142 9.41421 18.75 9 18.75H8C4.27208 18.75 1.25 15.7279 1.25 12C1.25 8.27208 4.27208 5.25 8 5.25H9C9.41421 5.25 9.75 5.58579 9.75 6C9.75 6.41421 9.41421 6.75 9 6.75H8Z",
                    fill: "#1C274C"
                }), Object(s.c)("path", {
                    d: "M8.24991 11.9999C8.24991 11.5857 8.58569 11.2499 8.99991 11.2499H14.9999C15.4141 11.2499 15.7499 11.5857 15.7499 11.9999C15.7499 12.4142 15.4141 12.7499 14.9999 12.7499H8.99991C8.58569 12.7499 8.24991 12.4142 8.24991 11.9999Z",
                    fill: "#1C274C"
                }), Object(s.c)("path", {
                    d: "M15 5.25C14.5858 5.25 14.25 5.58579 14.25 6C14.25 6.41421 14.5858 6.75 15 6.75H16C18.8995 6.75 21.25 9.10051 21.25 12C21.25 14.8995 18.8995 17.25 16 17.25H15C14.5858 17.25 14.25 17.5858 14.25 18C14.25 18.4142 14.5858 18.75 15 18.75H16C19.7279 18.75 22.75 15.7279 22.75 12C22.75 8.27208 19.7279 5.25 16 5.25H15Z",
                    fill: "#1C274C"
                })))))
            }
        },
        keWc: function(e, t, i) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(i("F/dt"));
            t.default = function(e, t) {
                var i = null;
                if (!e || "string" !== typeof e) return i;
                var n = (0, a.default)(e),
                    r = "function" === typeof t;
                return n.forEach((function(e) {
                    if ("declaration" === e.type) {
                        var n = e.property,
                            a = e.value;
                        r ? t(n, a, e) : a && ((i = i || {})[n] = a)
                    }
                })), i
            }
        },
        lPfT: function(e, t, i) {
            "use strict";
            var n = i("VBdi"),
                a = i("d4yW"),
                r = i("pbOP"),
                o = i("ncCA"),
                l = (i("PyY4"), i("dVLG"));
            const s = e => {
                let {
                    source: t,
                    isAmp: i,
                    isLongformArticle: s
                } = e;
                if (!(t && t.length > 0)) return null;
                const c = Object(r.e)() || Object(r.c)() ? ": " : " : ",
                    d = Object(l.c)("div", {
                        className: "article-source"
                    }, Object(l.c)(a.a, null, "Source"), c, t.map((e, t, a) => ((e, t, i) => {
                        if (!e) return null;
                        const a = Object(r.e)() ? ", " : " + ";
                        return e.featuredSourceLink ? Object(l.c)(n.Fragment, {
                            key: e.name
                        }, Object(l.c)(o.a, {
                            to: e.featuredSourceLink,
                            isAmp: i,
                            target: "_blank",
                            label: "Article Source",
                            eventTarget: e.name
                        }, e.name), t && a) : Object(l.c)(n.Fragment, {
                            key: e.name
                        }, e.name, t && a)
                    })(e, a.length > 1 && a.length - 1 > t, i)));
                return s ? Object(l.c)(n.Fragment, null, Object(l.c)("div", {
                    className: "container__inner"
                }, Object(l.c)("div", {
                    className: "l-col l-col--8--centered longform-article-source"
                }, d))) : Object(l.c)(n.Fragment, null, d)
            };
            s.defaultProps = {
                isAmp: !1,
                isLongformArticle: !1
            }, t.a = s
        },
        nArg: function(e, t, i) {
            "use strict";
            i("VBdi");
            var n = i("iaCl"),
                a = i("icih"),
                r = i.n(a),
                o = i("q9ob"),
                l = i("dVLG");
            var s = Object(o.a)(e => {
                let {
                    data: t,
                    RelatedArticlesComponent: i,
                    className: n
                } = e;
                return Object(l.c)(i, {
                    articles: (null === t || void 0 === t ? void 0 : t.articles) || [],
                    className: n
                })
            }, {
                query: r.a,
                variables: e => {
                    let {
                        article: t
                    } = e;
                    const {
                        id: i,
                        primaryTagsTerm: n,
                        moreOnWidgetArticles: a
                    } = t, r = [i];
                    return Array.isArray(a) && r.push(...a.map(e => null === e || void 0 === e ? void 0 : e.id).filter(Boolean)), {
                        tags: n,
                        quantity: 4,
                        offset: 0,
                        excludeIds: r
                    }
                }
            });
            i.d(t, "a", (function() {
                return c
            }));
            const c = e => {
                let {
                    article: t,
                    className: i,
                    RelatedArticlesComponent: a
                } = e;
                const {
                    primaryTagsTerm: r,
                    moreOnWidgetArticles: o,
                    relatedArticles: c
                } = t, d = Object(n.a)("articlePageAutomatedRelatedArticles");
                return (null === c || void 0 === c ? void 0 : c.length) > 0 ? Object(l.c)(a, {
                    articles: c,
                    className: i
                }) : "treatmentone" === d && (null === o || void 0 === o ? void 0 : o.length) > 0 ? Object(l.c)(a, {
                    articles: o,
                    className: i
                }) : "treatmenttwo" === d && r ? Object(l.c)(s, {
                    article: t,
                    className: i,
                    RelatedArticlesComponent: a
                }) : null
            }
        },
        nDgB: function(e, t, i) {
            "use strict";
            var n = i("cMIy"),
                a = i.n(n),
                r = (i("VBdi"), i("d4yW")),
                o = i("7RPU"),
                l = i("8Ffx"),
                s = (i("Bsv4"), i("dVLG"));
            t.a = e => {
                let {
                    correctionText: t,
                    correctionDate: i
                } = e;
                const n = (c = i) ? a()(c).format(Object(o.i)()) : null;
                var c;
                return t ? Object(s.c)("div", {
                    className: "correction-container"
                }, Object(s.c)("span", {
                    className: "correction__title"
                }, Object(s.c)(r.a, null, "Correction")), n && Object(s.c)("span", {
                    className: "correction__date"
                }, n), Object(s.c)("div", {
                    dangerouslySetInnerHTML: {
                        __html: Object(l.a)(t)
                    }
                })) : null
            }
        },
        oGiS: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = /<([a-zA-Z]+[0-9]?)/,
                a = /<head[^]*>/i,
                r = /<body[^]*>/i,
                o = function(e, t) {
                    throw new Error("This browser does not support `document.implementation.createHTMLDocument`")
                },
                l = function(e, t) {
                    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")
                },
                s = "object" === typeof window && window.DOMParser;
            if ("function" === typeof s) {
                var c = new s;
                o = l = function(e, t) {
                    return t && (e = "<".concat(t, ">").concat(e, "</").concat(t, ">")), c.parseFromString(e, "text/html")
                }
            }
            if ("object" === typeof document && document.implementation) {
                var d = document.implementation.createHTMLDocument();
                o = function(e, t) {
                    if (t) {
                        var i = d.documentElement.querySelector(t);
                        return i && (i.innerHTML = e), d
                    }
                    return d.documentElement.innerHTML = e, d
                }
            }
            var u, m = "object" === typeof document && document.createElement("template");
            m && m.content && (u = function(e) {
                return m.innerHTML = e, m.content.childNodes
            }), t.default = function(e) {
                var t, i, s = e.match(n),
                    c = s && s[1] ? s[1].toLowerCase() : "";
                switch (c) {
                    case "html":
                        var d = l(e);
                        if (!a.test(e)) null === (t = null === (p = d.querySelector("head")) || void 0 === p ? void 0 : p.parentNode) || void 0 === t || t.removeChild(p);
                        if (!r.test(e)) null === (i = null === (p = d.querySelector("body")) || void 0 === p ? void 0 : p.parentNode) || void 0 === i || i.removeChild(p);
                        return d.querySelectorAll("html");
                    case "head":
                    case "body":
                        var m = o(e).querySelectorAll(c);
                        return r.test(e) && a.test(e) ? m[0].parentNode.childNodes : m;
                    default:
                        return u ? u(e) : (p = o(e, "body").querySelector("body")).childNodes;
                        var p
                }
            }
        },
        oa0m: function(e, t, i) {
            "use strict";
            var n = i("VBdi"),
                a = i.n(n),
                r = i("9mJr"),
                o = i("dVLG");
            t.a = e => {
                let {
                    nodeData: t
                } = e;
                if (!t.src || !t["data-telegram-post"]) return null;
                const {
                    src: i,
                    async: n,
                    ...l
                } = t;
                return Object(o.c)(a.a.Fragment, null, Object(o.c)(r.a, null, Object(o.c)("script", {
                    async: n,
                    src: i
                })), Object(o.c)("script", l))
            }
        },
        pMe7: function(e, t, i) {
            "use strict";
            var n = i("Miz2"),
                a = i("VBdi"),
                r = i("N4w9"),
                o = i("IhaD"),
                l = i("s+3F"),
                s = i("bUZ2"),
                c = i("RrlQ"),
                d = (i("qOL4"), i("T2+i"), i("dVLG"));
            t.a = Object(o.a)(e => {
                let {
                    article: t,
                    isAmp: i,
                    isPreview: o,
                    moreVideoSectionRender: u,
                    updateScrollPageState: m,
                    scrollState: p,
                    renderedCallback: v,
                    FeaturedComponent: b = (e => Object(d.c)(s.a, Object(n.a)({}, e, {
                        isSinglePage: !0
                    }))),
                    AuthorComponent: f
                } = e;
                const h = Object(a.useContext)(r.b);
                if (!["episode", "video"].includes(t.postType)) return null;
                const g = {
                    isAmp: i,
                    updateScrollPageState: m,
                    scrollState: p,
                    FeaturedComponent: b,
                    article: t
                };
                return v(), Object(d.c)(l.a, {
                    article: t,
                    hostName: h,
                    isPreview: o,
                    className: "container--video-page",
                    secondColumnSize: 4,
                    leftSectionRender: u,
                    isAmp: i,
                    AuthorComponent: f,
                    adsConfig: {
                        hideAll: !0
                    }
                }, Object(d.c)(c.a, g))
            })
        },
        "pV/C": function(e, t, i) {
            "use strict";
            var n = i("Miz2"),
                a = i("FQxg"),
                r = i("cMIy"),
                o = i.n(r),
                l = i("GQIZ"),
                s = i.n(l),
                c = i("VBdi"),
                d = i.n(c),
                u = i("pFwd"),
                m = i.n(u),
                p = i("ZcAL"),
                v = i("ekvm"),
                b = i("9N7U"),
                f = i("w8RO"),
                h = i("C9Dh"),
                g = (i("CQBP"), i("dVLG"));
            const k = e => {
                let {
                    home: t,
                    away: i,
                    match_date: n,
                    match_time: a
                } = e;
                if (!t || !i) return;
                o.a.extend(s.a);
                const r = o()(n, "DD.MM.YYYY").format("ddd D MMM"),
                    l = v.a.isMobile() ? "190px" : "210px";
                return Object(g.c)("div", {
                    className: "statsperform-fixtures__slide",
                    style: {
                        minWidth: l
                    }
                }, Object(g.c)("div", {
                    className: "statsperform-fixtures__team-meta"
                }, Object(g.c)("img", {
                    src: null === t || void 0 === t ? void 0 : t.flag,
                    alt: null === t || void 0 === t ? void 0 : t.country,
                    className: "statsperform-fixtures__flag"
                }), Object(g.c)("span", {
                    className: "statsperform-fixtures__team-name"
                }, null === t || void 0 === t ? void 0 : t.country)), Object(g.c)("div", {
                    className: "statsperform-fixtures__team-meta"
                }, Object(g.c)("img", {
                    src: null === i || void 0 === i ? void 0 : i.flag,
                    alt: null === i || void 0 === i ? void 0 : i.country,
                    className: "statsperform-fixtures__flag"
                }), Object(g.c)("span", {
                    className: "statsperform-fixtures__team-name"
                }, null === i || void 0 === i ? void 0 : i.country)), Object(g.c)("div", {
                    className: "statsperform-fixtures__date-and-time"
                }, Object(g.c)("span", {
                    className: "statsperform-fixtures__date"
                }, r), Object(g.c)("span", {
                    className: "statsperform-fixtures__time"
                }, a)))
            };
            t.a = e => {
                let {
                    title: t,
                    date: i,
                    description: r,
                    sport_type: o,
                    sport_id: l,
                    sport_title: s,
                    isAmp: c
                } = e;
                const u = {
                        date: i,
                        ...l && {
                            sportID: l
                        },
                        ...o && {
                            sportType: o
                        }
                    },
                    {
                        loading: v,
                        data: y,
                        error: O
                    } = Object(a.b)(p.statsperformFixturesQuery, {
                        variables: u,
                        fetchPolicy: Object(b.getFetchPolicy)()
                    });
                if (v) return Object(g.c)(h.a, {
                    fullViewportHeight: !1
                });
                if (O) return null;
                const N = (null === y || void 0 === y ? void 0 : y.fixtures) || [];
                if (0 === N.length) return null;
                const j = {
                    className: "statsperform-fixtures__slider",
                    dots: !1,
                    infinite: !1,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    adaptiveHeight: !0,
                    variableWidth: !0,
                    initialSlide: 0,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }],
                    nextArrow: Object(g.c)(f.a, {
                        name: "carousal-arrow-right",
                        size: 32,
                        viewBox: "0 0 32 32"
                    }),
                    prevArrow: Object(g.c)(f.a, {
                        name: "carousal-arrow-left",
                        size: 32,
                        viewBox: "0 0 32 32"
                    })
                };
                return Object(g.c)(d.a.Fragment, null, Object(g.c)("div", {
                    className: "statsperform-fixtures"
                }, ((e, t) => e || t ? Object(g.c)("div", {
                    className: "statsperform-fixtures__sport-meta"
                }, e && Object(g.c)("span", {
                    className: "statsperform-fixtures__sport-name"
                }, e || "Sport"), t && Object(g.c)("span", {
                    className: "statsperform-fixtures__description"
                }, t)) : null)(s, r), Object(g.c)("div", {
                    className: "statsperform-fixtures__fixtures-meta"
                }, t && Object(g.c)("p", {
                    className: "statsperform-fixtures__widget-title"
                }, t), Object(g.c)("h2", {
                    className: "statsperform-fixtures__fixtures-title"
                }, "Fixtures")), !c && Object(g.c)(m.a, j, N.map(e => Object(g.c)(k, Object(n.a)({
                    key: e.id
                }, e)))), c && Object(g.c)("div", {
                    className: "statsperform-fixtures__slider"
                }, N.map(e => Object(g.c)(k, Object(n.a)({
                    key: e.id
                }, e))))), Object(g.c)("hr", null))
            }
        },
        poX3: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = i("3zfc"),
                o = i("VBdi"),
                l = i.n(o),
                s = i("N4w9"),
                c = i("QXYw"),
                d = i("P/sV"),
                u = i("Zow2"),
                m = i("8Or0"),
                p = i("xAi6"),
                v = i("8Ffx"),
                b = i("7tCN"),
                f = i("kXcp"),
                h = i("i5Xp"),
                g = i("9N7U"),
                k = i("JMEX"),
                y = i("VC/Y"),
                O = i("jiOX");
            var N = e => {
                    let {
                        content: t
                    } = e;
                    const i = new y.b;
                    i.addTransformer(new O.a);
                    let n = null;
                    try {
                        n = Object(r.b)(t, {
                            replace: e => {
                                if ("p" === e.name && 1 === e.children.length && "statsperform" === e.children[0].name) return Object(r.c)(e.children)
                            },
                            transform: (e, t) => i.applyTransformation(e, t)
                        })
                    } catch (a) {
                        return console.error(a), null
                    }
                    return Array.isArray(n) ? n.map((e, t) => "string" === typeof e ? e : { ...e,
                        key: t
                    }) : n
                },
                j = (i("prjU"), i("dVLG"));
            t.a = e => {
                let {
                    markup: t,
                    mobileMarkup: i,
                    className: n,
                    hideMobile: y = !1,
                    hideDesktop: O = !1
                } = e;
                Object(m.a)();
                const S = Object(d.a)(),
                    w = Object(u.a)(),
                    T = Object(s.e)(),
                    A = a()("wysiwyg", "additional-page-embeds", n, {
                        "opta-match-links": Object(f.b)(p.MATCH_CENTER_FEATURE_FLAG)
                    }),
                    _ = Object(c.a)();
                if (i && S && (t = i), !t) return null;
                if (O && !S || y && S) return null;
                const x = t.includes("opta-widget");
                if (T && !x) return (e => {
                    const t = Object(v.a)(e, []);
                    return Object(r.b)(t, {
                        replace(e) {
                            if ("p" === e.name) {
                                const i = e.children[0];
                                var t;
                                return (null === i || void 0 === i ? void 0 : i.attribs) && "iframe" === (null === i || void 0 === i ? void 0 : i.name) ? Object(j.c)("amp-iframe", {
                                    src: i.attribs.src,
                                    layout: "fixed-height",
                                    height: null === (t = i.attribs) || void 0 === t ? void 0 : t.height,
                                    width: "auto",
                                    sandbox: "allow-scripts allow-same-origin allow-popups",
                                    resizable: ""
                                }, Object(j.c)("div", {
                                    overflow: ""
                                }, "\xa0"), Object(j.c)("amp-img", {
                                    layout: "fill",
                                    placeholder: !0,
                                    src: "#"
                                })) : Object(j.c)("p", null)
                            }
                        }
                    })
                })(t);
                if (Object(g.hasStatsPerformWidget)(t)) return Object(j.c)(l.a.Fragment, null, Object(b.a)(t, w), Object(j.c)(N, {
                    content: t
                }));
                const F = (e => {
                    if (!e) return null;
                    const t = Object(v.a)(e, []);
                    return Object(r.b)(t, {
                        replace(e) {
                            if (e.attribs && "iframe" === e.name) {
                                e.attribs["data-aspect-ratio"] && (e.attribs.style = "width: 100%; aspect-ratio:" + e.attribs["data-aspect-ratio"]);
                                const t = Object(r.a)(e.attribs);
                                return Object(j.c)("iframe", t)
                            }
                        }
                    })
                })(x ? _ ? Object(b.f)(t) : null : t);
                return Object(j.c)(o.Fragment, null, Object(b.a)(t, w), Object(j.c)(k.a, {
                    content: t
                }), Object(j.c)("div", {
                    className: "section-inline-embeds-wrapper"
                }, Object(j.c)(s.a.Consumer, null, e => Object(j.c)("div", {
                    className: A,
                    css: Object(h.a)(e).wysiwyg
                }, F))))
            }
        },
        prjU: function(e, t, i) {},
        qOL4: function(e, t, i) {},
        qylq: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("I4R0");
            class a {
                constructor() {
                    this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
                }
                get parentNode() {
                    return this.parent
                }
                set parentNode(e) {
                    this.parent = e
                }
                get previousSibling() {
                    return this.prev
                }
                set previousSibling(e) {
                    this.prev = e
                }
                get nextSibling() {
                    return this.next
                }
                set nextSibling(e) {
                    this.next = e
                }
                cloneNode() {
                    return y(this, arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
                }
            }
            class r extends a {
                constructor(e) {
                    super(), this.data = e
                }
                get nodeValue() {
                    return this.data
                }
                set nodeValue(e) {
                    this.data = e
                }
            }
            class o extends r {
                constructor() {
                    super(...arguments), this.type = n.ElementType.Text
                }
                get nodeType() {
                    return 3
                }
            }
            class l extends r {
                constructor() {
                    super(...arguments), this.type = n.ElementType.Comment
                }
                get nodeType() {
                    return 8
                }
            }
            class s extends r {
                constructor(e, t) {
                    super(t), this.name = e, this.type = n.ElementType.Directive
                }
                get nodeType() {
                    return 1
                }
            }
            class c extends a {
                constructor(e) {
                    super(), this.children = e
                }
                get firstChild() {
                    var e;
                    return null !== (e = this.children[0]) && void 0 !== e ? e : null
                }
                get lastChild() {
                    return this.children.length > 0 ? this.children[this.children.length - 1] : null
                }
                get childNodes() {
                    return this.children
                }
                set childNodes(e) {
                    this.children = e
                }
            }
            class d extends c {
                constructor() {
                    super(...arguments), this.type = n.ElementType.CDATA
                }
                get nodeType() {
                    return 4
                }
            }
            class u extends c {
                constructor() {
                    super(...arguments), this.type = n.ElementType.Root
                }
                get nodeType() {
                    return 9
                }
            }
            class m extends c {
                constructor(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "script" === e ? n.ElementType.Script : "style" === e ? n.ElementType.Style : n.ElementType.Tag;
                    super(i), this.name = e, this.attribs = t, this.type = a
                }
                get nodeType() {
                    return 1
                }
                get tagName() {
                    return this.name
                }
                set tagName(e) {
                    this.name = e
                }
                get attributes() {
                    return Object.keys(this.attribs).map(e => {
                        var t, i;
                        return {
                            name: e,
                            value: this.attribs[e],
                            namespace: null === (t = this["x-attribsNamespace"]) || void 0 === t ? void 0 : t[e],
                            prefix: null === (i = this["x-attribsPrefix"]) || void 0 === i ? void 0 : i[e]
                        }
                    })
                }
            }

            function p(e) {
                return Object(n.isTag)(e)
            }

            function v(e) {
                return e.type === n.ElementType.CDATA
            }

            function b(e) {
                return e.type === n.ElementType.Text
            }

            function f(e) {
                return e.type === n.ElementType.Comment
            }

            function h(e) {
                return e.type === n.ElementType.Directive
            }

            function g(e) {
                return e.type === n.ElementType.Root
            }

            function k(e) {
                return Object.prototype.hasOwnProperty.call(e, "children")
            }

            function y(e) {
                let t, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (b(e)) t = new o(e.data);
                else if (f(e)) t = new l(e.data);
                else if (p(e)) {
                    const n = i ? O(e.children) : [],
                        a = new m(e.name, { ...e.attribs
                        }, n);
                    n.forEach(e => e.parent = a), null != e.namespace && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = { ...e["x-attribsNamespace"]
                    }), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = { ...e["x-attribsPrefix"]
                    }), t = a
                } else if (v(e)) {
                    const n = i ? O(e.children) : [],
                        a = new d(n);
                    n.forEach(e => e.parent = a), t = a
                } else if (g(e)) {
                    const n = i ? O(e.children) : [],
                        a = new u(n);
                    n.forEach(e => e.parent = a), e["x-mode"] && (a["x-mode"] = e["x-mode"]), t = a
                } else {
                    if (!h(e)) throw new Error("Not implemented yet: " + e.type); {
                        const i = new s(e.name, e.data);
                        null != e["x-name"] && (i["x-name"] = e["x-name"], i["x-publicId"] = e["x-publicId"], i["x-systemId"] = e["x-systemId"]), t = i
                    }
                }
                return t.startIndex = e.startIndex, t.endIndex = e.endIndex, null != e.sourceCodeLocation && (t.sourceCodeLocation = e.sourceCodeLocation), t
            }

            function O(e) {
                const t = e.map(e => y(e, !0));
                for (let i = 1; i < t.length; i++) t[i].prev = t[i - 1], t[i - 1].next = t[i];
                return t
            }
            i.d(t, "DomHandler", (function() {
                return j
            })), i.d(t, "Node", (function() {
                return a
            })), i.d(t, "DataNode", (function() {
                return r
            })), i.d(t, "Text", (function() {
                return o
            })), i.d(t, "Comment", (function() {
                return l
            })), i.d(t, "ProcessingInstruction", (function() {
                return s
            })), i.d(t, "NodeWithChildren", (function() {
                return c
            })), i.d(t, "CDATA", (function() {
                return d
            })), i.d(t, "Document", (function() {
                return u
            })), i.d(t, "Element", (function() {
                return m
            })), i.d(t, "isTag", (function() {
                return p
            })), i.d(t, "isCDATA", (function() {
                return v
            })), i.d(t, "isText", (function() {
                return b
            })), i.d(t, "isComment", (function() {
                return f
            })), i.d(t, "isDirective", (function() {
                return h
            })), i.d(t, "isDocument", (function() {
                return g
            })), i.d(t, "hasChildren", (function() {
                return k
            })), i.d(t, "cloneNode", (function() {
                return y
            }));
            const N = {
                withStartIndices: !1,
                withEndIndices: !1,
                xmlMode: !1
            };
            class j {
                constructor(e, t, i) {
                    this.dom = [], this.root = new u(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, "function" === typeof t && (i = t, t = N), "object" === typeof e && (t = e, e = void 0), this.callback = null !== e && void 0 !== e ? e : null, this.options = null !== t && void 0 !== t ? t : N, this.elementCB = null !== i && void 0 !== i ? i : null
                }
                onparserinit(e) {
                    this.parser = e
                }
                onreset() {
                    this.dom = [], this.root = new u(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
                }
                onend() {
                    this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
                }
                onerror(e) {
                    this.handleCallback(e)
                }
                onclosetag() {
                    this.lastNode = null;
                    const e = this.tagStack.pop();
                    this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e)
                }
                onopentag(e, t) {
                    const i = this.options.xmlMode ? n.ElementType.Tag : void 0,
                        a = new m(e, t, void 0, i);
                    this.addNode(a), this.tagStack.push(a)
                }
                ontext(e) {
                    const {
                        lastNode: t
                    } = this;
                    if (t && t.type === n.ElementType.Text) t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
                    else {
                        const t = new o(e);
                        this.addNode(t), this.lastNode = t
                    }
                }
                oncomment(e) {
                    if (this.lastNode && this.lastNode.type === n.ElementType.Comment) return void(this.lastNode.data += e);
                    const t = new l(e);
                    this.addNode(t), this.lastNode = t
                }
                oncommentend() {
                    this.lastNode = null
                }
                oncdatastart() {
                    const e = new o(""),
                        t = new d([e]);
                    this.addNode(t), e.parent = t, this.lastNode = e
                }
                oncdataend() {
                    this.lastNode = null
                }
                onprocessinginstruction(e, t) {
                    const i = new s(e, t);
                    this.addNode(i)
                }
                handleCallback(e) {
                    if ("function" === typeof this.callback) this.callback(e, this.dom);
                    else if (e) throw e
                }
                addNode(e) {
                    const t = this.tagStack[this.tagStack.length - 1],
                        i = t.children[t.children.length - 1];
                    this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), i && (e.prev = i, i.next = e), e.parent = t, this.lastNode = null
                }
            }
            t.default = j
        },
        rZLu: function(e, t, i) {},
        "s+3F": function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = i("VBdi"),
                o = i.n(r),
                l = i("96Qw"),
                s = i("MwNz"),
                c = i("N4w9"),
                d = i("ekvm"),
                u = i("IhaD"),
                m = i("xAi6"),
                p = i("kXcp"),
                v = i("pbOP"),
                b = i("9N7U"),
                f = i("cv48"),
                h = i("HXpp"),
                g = i("axnn"),
                k = i("HiUM"),
                y = i("wzDw"),
                O = i("9mJr"),
                N = i("P/sV"),
                j = (i("T6Rn"), i("dVLG"));
            var S = () => {
                    const e = Object(N.a)();
                    return Object(v.e)() && !e && Object(j.c)(o.a.Fragment, null, Object(j.c)(O.a, null, Object(j.c)("script", {
                        key: m.DISCO_HEADLINER_WIDGET_SCRIPT,
                        src: m.DISCO_HEADLINER_WIDGET_SCRIPT,
                        id: "disco-headliner-podcast-widget",
                        defer: !0,
                        type: "text/javascript"
                    })), Object(j.c)("div", {
                        className: "disco-headliner-widget-placement u-hidden--tablet"
                    }, Object(j.c)("div", {
                        className: "disco-episode-widget",
                        "data-widget-id": m.DISCO_HEADLINER_WIDGET_ID
                    })))
                },
                w = i("j8Oj"),
                T = i("YcvO"),
                A = i("gpRv"),
                _ = i("GYGN"),
                x = i("/H+g"),
                F = i("0fTZ"),
                E = i("QXYw"),
                D = i("CiaY"),
                P = i("BEYP"),
                M = i("A+K4"),
                I = i("P1ag"),
                C = i("b8zw"),
                V = i("3lOw"),
                L = i("nArg");
            var R = e => {
                let {
                    article: t,
                    isPreview: i,
                    ArticlePrefooterComponent: n,
                    AuthorComponent: o,
                    RelatedArticlesComponent: l,
                    isAmp: c,
                    isSeoBot: d,
                    renderedCallback: u,
                    shouldRenderDianomi: p
                } = e;
                const v = Object(E.a)(),
                    [b, f] = Object(r.useState)(!1),
                    O = ["opinion", "blog"].includes(t.postType),
                    S = Object(N.a)();
                Object(r.useEffect)(() => {
                    const e = document.querySelectorAll(".slot-3-placement");
                    f(0 === e.length)
                }, []);
                return v || c || d ? Object(j.c)(M.a, {
                    isAmp: c
                }, ["opinion", "post"].includes(t.postType) && S && Object(j.c)(k.a, {
                    placementSource: "Articles",
                    type: "mobile"
                }), Object(j.c)(F.a, {
                    article: t,
                    isPreview: i
                }, (e, i) => {
                    const d = e.mostRecent && e.mostRecent.length > 0,
                        v = !O && e.articleList && e.articleList.length > 0,
                        f = a()({
                            "article-more-from-topic": d
                        }),
                        k = a()({
                            "article-related-list__hr": v || d
                        }),
                        N = a()({
                            "article-more-from-author": k || t.relatedArticles && t.relatedArticles.length > 0
                        });
                    return u(), Object(j.c)(P.a, null, O && 0 !== t.author.length && Object(j.c)(r.Fragment, null, Object(j.c)(o, {
                        authorList: t.author,
                        fullDisplay: !0
                    }), Object(j.c)("hr", null)), b && Object(j.c)(g.a, {
                        type: "mobile"
                    }), Object(D.a)() && S && !b && Object(j.c)("div", {
                        className: "container--ads in-article-ads more-from-section--ad"
                    }, Object(j.c)(h.a, {
                        adUnit: m.AD_UNIT_PREFIX + "in-article",
                        bannerType: s.a.get("AD_SLOTS").in_article + "3"
                    })), p && Object(j.c)(y.a, {
                        position: m.DIANOMI_SETUP.position.dianomiArticle
                    }), t.homePageEvent && Object(j.c)(C.a, {
                        article: t,
                        isAmp: c
                    }), Object(j.c)(V.a, {
                        isAmp: c,
                        article: t
                    }), Object(j.c)(L.a, {
                        article: t,
                        className: k,
                        RelatedArticlesComponent: l
                    }), e.articleList && Object(j.c)(n, {
                        articleList: e.articleList,
                        className: O ? N : f,
                        contentType: t.postType,
                        sectionTitle: i,
                        isAmp: c,
                        id: "article-more-from-" + (O ? "author" : "topic")
                    }), Object(j.c)(n, {
                        articleList: e.mostRecent,
                        isAmp: c,
                        id: "article-most-read"
                    }))
                })) : Object(j.c)(I.a, null)
            };
            i("KSud");
            class B extends o.a.Component {
                shouldComponentUpdate(e) {
                    return Object(b.hasPostChanged)(this.props, e)
                }
                hasDailyBrief() {
                    const {
                        article: e
                    } = this.props;
                    return ["opinion", "post"].includes(e.postType)
                }
                getAdUnit(e) {
                    let t;
                    if (e.params.site) t = e.params.site;
                    else if ("opinions" === e.params[0]) t = "opinion";
                    else {
                        var i, n;
                        t = "news/" + (null === (i = Object(b.getMoreFromSectionParams)(this.props.article)) || void 0 === i || null === (n = i.param) || void 0 === n ? void 0 : n.category)
                    }
                    return `${s.a.get("AD_UNIT_PREFIX")}${t}/article`
                }
                renderDesktopAds(e) {
                    var t, i;
                    if ((null === (t = this.props.adsConfig) || void 0 === t ? void 0 : t.hideAll) || (null === (i = this.props.adsConfig) || void 0 === i ? void 0 : i.hideDesktop)) return;
                    const {
                        AdsComponent: n,
                        match: a
                    } = this.props, r = s.a.get("AD_SLOTS");
                    return Object(j.c)("div", {
                        className: "sticky-ads"
                    }, this.canRenderConnatix && Object(j.c)(g.a, null), Object(j.c)(n, {
                        className: "article-ad-left",
                        adUnit: this.getAdUnit(a),
                        layout: "desktop",
                        bannerType: r.right_rail,
                        refreshOnTime: !0,
                        maxRefreshCount: 3,
                        hideTitle: e
                    }))
                }
                renderHorizontalLine(e) {
                    return Object(j.c)("hr", {
                        className: e
                    })
                }
                getMainColumnClasses(e) {
                    return a()("l-col", "l-col--" + e)
                }
                renderSecondaryColumn() {
                    var e, t;
                    const {
                        leftSectionRender: i,
                        secondColumnSize: n,
                        hasAdSection: r,
                        match: o
                    } = this.props, l = a()(this.getMainColumnClasses(n || 4), r ? "container--ads-vertical-stretch" : ""), c = s.a.get("AD_SLOTS");
                    return Object(j.c)("div", {
                        className: l
                    }, this.hasDailyBrief() && !d.a.isMobile() && Object(j.c)(k.a, {
                        placementSource: "Articles",
                        type: "desktop"
                    }), !(null === (e = this.props.adsConfig) || void 0 === e ? void 0 : e.hideAll) && Object(p.b)("sponsorship-banner/status") && Object(j.c)(h.a, {
                        className: "sponsor-ad",
                        adUnit: this.getAdUnit(o),
                        layout: "desktop",
                        bannerType: c.sponsored,
                        hideTitle: !1,
                        sponsoredAd: !0
                    }), this.canRenderDianomi && Object(j.c)(y.a, {
                        position: m.DIANOMI_SETUP.position.dianomiSidebar
                    }), !(null === (t = this.props.adsConfig) || void 0 === t ? void 0 : t.hideAll) && Object(j.c)(S, null), i, this.renderDesktopAds((this.context.components.ArticlePage || {}).hideAdLabel))
                }
                renderMainColumn() {
                    const {
                        article: e,
                        isPreview: t,
                        articleColumnSize: i,
                        renderedCallback: n,
                        isAmp: a,
                        ArticlePrefooterComponent: r,
                        AuthorComponent: l,
                        RelatedArticlesComponent: s
                    } = this.props, c = {
                        article: e,
                        isPreview: t,
                        renderedCallback: n,
                        isAmp: a,
                        isSeoBot: this.context.isSeoBot,
                        ArticlePrefooterComponent: r,
                        AuthorComponent: l,
                        RelatedArticlesComponent: s,
                        shouldRenderDianomi: this.canRenderDianomi
                    }, d = this.getMainColumnClasses(i);
                    return Object(j.c)("div", {
                        className: "container__inner"
                    }, Object(j.c)("div", {
                        className: d
                    }, this.props.children, !this.isVideoPage && Object(j.c)(o.a.Fragment, null, this.renderHorizontalLine(), Object(j.c)(R, c))), this.renderSecondaryColumn())
                }
                get canRenderDianomi() {
                    const {
                        adsConfig: e
                    } = this.props;
                    return Object(v.e)() && !((null === e || void 0 === e ? void 0 : e.hideAll) || (null === e || void 0 === e ? void 0 : e.hideDianomi))
                }
                get canRenderConnatix() {
                    const {
                        adsConfig: e
                    } = this.props;
                    return !d.a.isMobile() && !((null === e || void 0 === e ? void 0 : e.hideAll) || (null === e || void 0 === e ? void 0 : e.hideConnatix))
                }
                get isVideoPage() {
                    return ["video", "episode"].includes(this.props.article.postType)
                }
                render() {
                    const {
                        article: e,
                        hostName: t,
                        isPreview: i,
                        className: n,
                        isAmp: r
                    } = this.props, o = a()("container", "container--grid", "container--article", "container--white", "container--vertical-padding", n);
                    return Object(j.c)("div", {
                        className: o
                    }, Object(j.c)(f.a, {
                        article: e
                    }), Object(j.c)(T.b, {
                        article: e,
                        hostName: t,
                        isPreview: i,
                        isAmp: r
                    }), Object(j.c)(A.a, {
                        article: e,
                        isAmp: r
                    }), this.renderMainColumn())
                }
            }
            B.defaultProps = {
                ArticlePrefooterComponent: w.a,
                AuthorComponent: _.a,
                RelatedArticlesComponent: x.a,
                AdsComponent: h.a,
                isAmp: !1,
                articleColumnSize: 8
            }, B.contextType = c.a;
            t.a = Object(u.a)(Object(l.withRouter)(B))
        },
        snVf: function(e, t, i) {
            "use strict";
            var n = i("VBdi"),
                a = i.n(n),
                r = i("fWgI"),
                o = i("aPqV"),
                l = i("Miz2"),
                s = i("P/sV"),
                c = i("vQ8D"),
                d = i("yDnS"),
                u = i("+JkO");
            const m = Object(n.createContext)(null);
            var p = i("niUx"),
                v = i("AAFT"),
                b = i.n(v),
                f = i("KthT"),
                h = i("dVLG");
            var g = a.a.memo(e => {
                    var t;
                    const i = (() => {
                            const e = Object(n.useContext)(m);
                            if (void 0 === e) throw new Error("BrightcovePlayerContext is missing. Please add <BrightcovePlayerContext.Provider value={...}>");
                            return e
                        })(),
                        [a, r] = Object(n.useState)(null),
                        {
                            videoAccountId: o,
                            videoPlayerId: s,
                            videoId: c,
                            className: d,
                            enablePIP: v,
                            shouldMute: g,
                            autoPlay: k,
                            isLiveStream: y,
                            duration: O
                        } = e;
                    Object(n.useEffect)(() => {
                        var e, t;
                        if (a && a.isReady_) return a.reset(), null === (e = a.el_) || void 0 === e || null === (t = e.classList) || void 0 === t || t.add("pause-controller"), a.on("play", j), a.on("pause", S), a.on(["loadedmetadata", "durationchange", "loadstart"], N), () => {
                            null === a || void 0 === a || a.off("loadedmetadata", N), null === a || void 0 === a || a.off("durationchange", N), null === a || void 0 === a || a.off("play", j), null === a || void 0 === a || a.off("pause", S)
                        }
                    }, [a]);
                    const N = () => {
                        if (i({
                                type: "VideoMetadataLoaded",
                                payload: { ...a.mediainfo,
                                    player: a,
                                    videoType: y ? "Streaming" : "VOD"
                                }
                            }), !k) return null;
                        a.play(), a.muted(!0), i({
                            type: "VideoAutoPlayed",
                            payload: {
                                autoPlay: !0,
                                muted: !0
                            }
                        })
                    };
                    a && Object(u.c)(null === (t = a.el_) || void 0 === t ? void 0 : t.id, s, O);
                    const j = () => {
                            Object(f.i)({
                                element: document.body,
                                mediaId: a.id()
                            }), a.muted(g), i({
                                type: "VideoPlay",
                                payload: {
                                    muted: g,
                                    mediaInfo: a.mediainfo,
                                    duration: a.mediainfo.duration,
                                    videoIndex: a.ajPlaylistIndex || 0
                                }
                            })
                        },
                        S = e => {
                            i({
                                type: "VideoPause",
                                payload: {
                                    isPaused: !0,
                                    mediaInfo: a.mediainfo,
                                    videoIndex: a.ajPlaylistIndex || 0,
                                    videoType: y ? "Streaming" : "VOD"
                                }
                            })
                        },
                        w = {
                            accountId: o,
                            playerId: s,
                            videoId: c
                        };
                    return Object(h.c)(p.a, Object(l.a)({
                        attrs: {
                            className: b()("aj-video-player", d)
                        }
                    }, w, {
                        embedOptions: {
                            pip: v
                        },
                        onSuccess: e => {
                            const t = e.ref;
                            r(t)
                        },
                        onFailure: () => {}
                    }))
                }, (e, t) => e.videoId === t.videoId),
                k = i("Ot6i"),
                y = i("7RPU"),
                O = i("xAi6");
            const N = (e, t) => {
                    switch (t.type) {
                        case "VideoPlay":
                            {
                                var i;
                                const n = {};Object(u.d)(n);
                                const a = { ...n,
                                    position: t.payload.videoIndex + 1,
                                    videoType: O.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod,
                                    mediaType: O.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod,
                                    videoSource: O.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.brightcove,
                                    mediaSource: O.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.brightcove,
                                    videoPlacement: O.AMPLITUDE_EVENT_PROPERTY_VALUES.video_placement.in_content,
                                    duration: Math.round(t.payload.mediaInfo.duration),
                                    videoId: t.payload.mediaInfo.id,
                                    videoTitle: t.payload.mediaInfo.name,
                                    videoDate: t.payload.mediaInfo.createdAt,
                                    fileUrl: Object(f.d)(null === (i = t.payload.mediaInfo) || void 0 === i ? void 0 : i.sources),
                                    playlistIndex: t.payload.videoIndex + 1
                                };
                                return 1 !== a.position && (a.recirculationSource = O.AMPLITUDE_EVENT_PROPERTY_VALUES.recirculation_source.article_playlist),
                                Object(k.e)("VideoStarted", a),
                                { ...e,
                                    showDuration: !1,
                                    isPlaying: !0,
                                    isMuted: t.payload.muted
                                }
                            }
                        case "VideoPause":
                            {
                                var n;
                                const i = {};Object(u.d)(i);
                                const a = { ...i,
                                    position: t.payload.videoIndex + 1,
                                    videoType: O.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod,
                                    mediaType: O.AMPLITUDE_EVENT_PROPERTY_VALUES.video_type.vod,
                                    videoSource: O.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.brightcove,
                                    mediaSource: O.AMPLITUDE_EVENT_PROPERTY_VALUES.video_source.brightcove,
                                    videoPlacement: "in-Content",
                                    duration: Math.round(t.payload.mediaInfo.duration),
                                    videoId: t.payload.mediaInfo.id,
                                    videoTitle: t.payload.mediaInfo.name,
                                    videoDate: t.payload.mediaInfo.createdAt,
                                    fileUrl: Object(f.d)(null === (n = t.payload.mediaInfo) || void 0 === n ? void 0 : n.sources)
                                };
                                return 1 !== a.position && (a.recirculationSource = O.AMPLITUDE_EVENT_PROPERTY_VALUES.recirculation_source.article_playlist),
                                Object(k.e)("VideoStopped", a),
                                { ...e,
                                    isPaused: t.payload.isPaused,
                                    isPlaying: !1,
                                    videoIndex: t.payload.videoIndex
                                }
                            }
                        case "VideoAutoPlayed":
                            return { ...e,
                                showDuration: !1,
                                isPlaying: !0,
                                isMuted: t.payload.muted,
                                autoPlay: !0
                            };
                        case "VideoMetadataLoaded":
                            {
                                const i = Object(y.d)(t.payload.duration),
                                    n = e.initialVideo || {
                                        id: t.payload.id,
                                        name: t.payload.name,
                                        thumbnail: t.payload.thumbnail,
                                        duration: i
                                    };
                                return { ...e,
                                    showDuration: !e.isPlaying,
                                    player: t.payload.player,
                                    initialVideo: n,
                                    duration: i
                                }
                            }
                    }
                },
                j = e => ({ ...e,
                    showDuration: !0
                });
            var S = e => {
                const {
                    videoId: t,
                    autoPlay: i,
                    featuredImageURL: a,
                    duration: r,
                    enablePlaylist: o,
                    playListTerm: p,
                    showVideoDuration: v = !0,
                    videoPlayerId: b,
                    videoAccountId: f,
                    shouldMute: k,
                    isLiveStream: y
                } = e, O = {
                    videoId: t,
                    videoAccountId: f,
                    videoPlayerId: b
                }, [S, w] = Object(n.useReducer)(N, O, j), T = Object(s.a)();
                if (!t || !f || !b) return null;
                const A = r || S.duration;
                var _, x, F, E;
                S.player && (Object(u.c)(null === (_ = S.player.el_) || void 0 === _ ? void 0 : _.id, b, A), !y && (null === (x = (F = S.player).playbackRates) || void 0 === x || x.call(F, null === (E = S.player.options_) || void 0 === E ? void 0 : E.playbackRates)));
                return Object(h.c)(m.Provider, {
                    value: w
                }, Object(h.c)(g, Object(l.a)({}, e, {
                    isMobile: T,
                    thumbnailLink: a,
                    shouldMute: k,
                    isLiveStream: y
                })), Object(h.c)(d.a, {
                    duration: A,
                    isVisible: !i && v && S.showDuration,
                    variant: "large"
                }), o && S.initialVideo && Object(h.c)(c.a, {
                    initialVideo: S.initialVideo,
                    term: p,
                    player: S.player,
                    customClasses: "in-article-brightcove-playlist"
                }))
            };
            t.a = e => {
                let {
                    videoId: t,
                    accountId: i,
                    enablePlaylist: a,
                    playlistTerm: l,
                    duration: s
                } = e;
                const c = Object(n.useRef)(),
                    d = Object(r.a)(c, "100px");
                return Object(h.c)("div", {
                    ref: c,
                    className: "video-player-facade-container"
                }, d && Object(h.c)(S, {
                    className: "in-article-bc-video-player aj-parsed-component",
                    videoId: t,
                    enablePlaylist: a,
                    playListTerm: l,
                    videoPlayerId: Object(o.e)(i),
                    videoAccountId: Object(o.d)(i),
                    defferedDuration: !0,
                    autoPlay: !1,
                    showVideoDuration: !0,
                    duration: s
                }))
            }
        },
        trUi: function(e, t, i) {
            "use strict";
            i("VBdi");
            var n = i("OtuB"),
                a = i("CX3F"),
                r = (i("Xo00"), i("dVLG"));
            t.a = e => {
                let {
                    article: t,
                    label: i,
                    isAmp: o
                } = e;
                return Object(r.c)("header", {
                    className: "article-header"
                }, Object(r.c)(a.b, {
                    breaking: t.isBreaking,
                    customContent: t.postLabel,
                    developing: t.isDeveloping,
                    featuredSource: t.source,
                    ignoreFeaturedSource: !0,
                    live: t.isLive,
                    series: t.series,
                    type: t.postType,
                    size: "large",
                    link: t.link,
                    label: i,
                    eventTarget: t.link,
                    isAmp: o
                }), Object(r.c)(n.a, {
                    article: t,
                    isAmp: o
                }), Object(r.c)("h1", null, t.title), t.subheading && Object(r.c)("p", {
                    className: "article__subhead"
                }, Object(r.c)("em", null, t.subheading)))
            }
        },
        "us/n": function(e, t, i) {
            "use strict";
            i("VBdi");
            var n = i("vUkw"),
                a = i.n(n),
                r = i("MwNz"),
                o = i("ZDfq"),
                l = i("5pgF"),
                s = i("AYes"),
                c = i("rYNr"),
                d = i("dVLG");
            const u = e => {
                let {
                    authorList: t,
                    fullDisplay: i,
                    showBiography: n = !0
                } = e;
                return Object(d.c)("ul", {
                    className: "article-author"
                }, t.map(e => {
                    const t = Object(l.a)(e.avatars, "96") || r.a.get("authorAvatar");
                    return Object(d.c)("li", {
                        className: "article-author__item",
                        key: e.id
                    }, Object(d.c)("a", {
                        className: "article-author__link",
                        href: e.link
                    }, Object(d.c)(c.a, {
                        className: "article-author__image",
                        url: t,
                        width: 60,
                        height: 60,
                        alt: e.name,
                        sources: [{
                            crop: "",
                            width: 60,
                            height: 60,
                            url: t
                        }]
                    })), Object(d.c)("div", {
                        className: "article-author__info"
                    }, Object(d.c)("div", {
                        className: "article-author__name"
                    }, Object(d.c)(s.a, {
                        author: e,
                        isAmp: !0
                    })), e.jobTitle && Object(d.c)("div", {
                        className: "article-author__title"
                    }, e.jobTitle), n && (!e.jobTitle || i) && e.description && Object(d.c)("div", {
                        className: "article-author__desc",
                        dangerouslySetInnerHTML: {
                            __html: a()(e.description, o.summaryHtml)
                        }
                    })))
                }))
            };
            u.defaultProps = {
                fullDisplay: !1
            }, t.a = u
        },
        wzDw: function(e, t, i) {
            "use strict";
            var n = i("AAFT"),
                a = i.n(n),
                r = i("dQgG"),
                o = i("VBdi"),
                l = i("ekvm"),
                s = i("xAi6"),
                c = i("kXcp"),
                d = i("abvY"),
                u = (i("xZV4"), i("dVLG"));
            const {
                idSet: m,
                validGeoLocations: p,
                position: {
                    dianomiArticle: v,
                    dianomiRelated: b,
                    dianomiSidebar: f
                }
            } = s.DIANOMI_SETUP;
            t.a = e => {
                let {
                    position: t
                } = e;
                const i = a()({
                        dianomi_context: !0,
                        dianomi_article: t === v,
                        dianomi_related: t === b,
                        dianomi_sidebar: t === f
                    }),
                    [n, s] = Object(o.useState)(!1),
                    h = l.a.isMobile() ? "mobile" : "desktop",
                    g = !(l.a.isMobile() && t === f);
                return Object(o.useEffect)(() => {
                    Object(d.a)().promise.then(e => {
                        const t = p.includes(e);
                        s(t), window.dataLayer.push({
                            event: "dianomi_valid_geo_location",
                            dianomiValidLocation: t
                        }), window.isDianomiValidLocation = t, g && t && window.dianomiReloadContext && window.dianomiReloadContext()
                    })
                }, []), Object(c.b)("advertisements/status") && n ? Object(u.c)("div", {
                    className: "dianomi-container"
                }, r.canUseDOM && g && Object(u.c)("div", {
                    className: i,
                    "data-dianomi-context-id": m[h][t],
                    "data-testid": "dianomi-ad"
                })) : null
            }
        },
        xZV4: function(e, t, i) {},
        yKOh: function(e, t, i) {},
        z6bU: function(e, t, i) {
            "use strict";
            i.d(t, "b", (function() {
                return n
            })), i.d(t, "a", (function() {
                return a
            })), i.d(t, "c", (function() {
                return r
            }));
            const n = function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1280x720";
                    return e ? e.replace(i, t) : e
                },
                a = "flips",
                r = e => {
                    const t = new Set;
                    return e.filter(e => !(!(null === e || void 0 === e ? void 0 : e.id) || t.has(e.id)) && (t.add(e.id), !0))
                }
        },
        zK3K: function(e, t, i) {
            "use strict";
            var n = i("dQgG"),
                a = i("VBdi"),
                r = i.n(a),
                o = i("8Ffx"),
                l = (i("BnyI"), i("dVLG"));
            t.a = e => {
                let {
                    tocItems: t,
                    i18n: i,
                    offset: a = 135
                } = e;
                const s = r.a.useRef(null),
                    c = e => e.replace(/^(['"])|(['"])$/g, ""),
                    d = r.a.useCallback(() => {
                        if (n.canUseDOM) {
                            return null !== document.querySelector(".navigation-bar--sticky") ? a : 90
                        }
                        return 90
                    }, []);
                return r.a.useEffect(() => {
                    const e = s.current;
                    e && e.addEventListener("click", e => {
                        if (e.target.closest(".aj-toc-link")) {
                            e.preventDefault();
                            const t = e.target.closest(".aj-toc-link").getAttribute("href").substring(1),
                                i = document.getElementById(t);
                            if (i) {
                                const e = d(),
                                    t = i.getBoundingClientRect().top + window.scrollY - e;
                                window.scrollTo({
                                    top: t,
                                    behavior: "smooth"
                                })
                            }
                        }
                    })
                }, [d]), Object(l.c)("div", {
                    className: "aj-toc-wrapper"
                }, Object(l.c)("nav", {
                    ref: s,
                    className: "aj-toc-container article-b-l",
                    "aria-label": c(i.t("table of contents"))
                }, Object(l.c)("span", {
                    className: "jump-to-label"
                }, c(i.t("jump to"))), Object(l.c)("ul", {
                    className: "aj-toc-list",
                    role: "list"
                }, t.map(e => Object(l.c)("li", {
                    key: e.id,
                    role: "listitem",
                    className: "toc-level-" + e.level
                }, Object(l.c)("a", {
                    href: "#" + e.id,
                    className: "aj-toc-link"
                }, Object(l.c)("span", {
                    className: "toc-text"
                }, Object(o.b)(c(e.text)))))))))
            }
        },
        zWTB: function(e, t, i) {
            "use strict";
            i.d(t, "b", (function() {
                return c
            }));
            i("VBdi");
            var n = i("N4w9"),
                a = i("9N7U"),
                r = i("SWuB"),
                o = i("18NH"),
                l = i("dVLG");
            const s = ["tags", "where", "categories"],
                c = e => {
                    for (const t of s) {
                        const i = d(e, t);
                        if (i) return i
                    }
                    return null
                },
                d = (e, t) => {
                    var i;
                    const n = Object(r.c)(e, t, !0);
                    if (u(n)) return n;
                    return (null !== (i = e[t]) && void 0 !== i ? i : []).find(u) || null
                },
                u = e => {
                    var t;
                    return Boolean(null === e || void 0 === e || null === (t = e.customNavigation) || void 0 === t ? void 0 : t.length)
                };
            t.a = e => {
                var t, i, r;
                let {
                    article: s,
                    customPrimaryTerm: d,
                    style: u = "full-width",
                    taxonomyPage: m = !1
                } = e;
                if (Object(n.e)()) return null;
                const p = null === s || void 0 === s || null === (t = s.sponsorTax) || void 0 === t || null === (i = t[0]) || void 0 === i || null === (r = i.subNav) || void 0 === r ? void 0 : r[0],
                    v = d || c(s),
                    b = [];
                if (b.push(s.postType), !v && !p) return null;
                const {
                    menuItems: f,
                    displayedTitle: h,
                    displayedTitleLink: g,
                    customNavigationBrandingImg: k,
                    isPinningEnabled: y,
                    displayCustomNavigationOnArticles: O
                } = Object(a.getStickyNavigationData)(v, p);
                return (m || O) && y ? Object(l.c)(o.b, {
                    menu: f,
                    isSticky: !!y,
                    style: u,
                    defaultTitle: h,
                    displayedTitle: "" + h,
                    displayedTitleLink: g,
                    displayedBrandingImg: k,
                    postType: s.postType,
                    classes: b
                }) : null
            }
        }
    }
]);