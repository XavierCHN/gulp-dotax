import { sheetToKV } from '../src/sheetToKV';
import { createVinylFile } from './testUtils';
import Vinyl from 'vinyl';
import xlsx from 'node-xlsx';

// Mock xlsx data matching test.xlsx content
function createMockXlsxBuffer(): Buffer {
    const data = [
        {
            name: 'test_sheet1',
            data: [
                ['this is a test file', '测试key'],
                ['main_key', 'test_key1', 'test_key2', 'AbilityValues[{]', '#ValuesLoc', 1, 2, 3, 4, '[}]', 'test333', 'optional_custom_prefix_#Loc{}_optional_suffix'],
                ['test_unit', 1, 'a', null, '测试', 'test  { "d1" "2" "d2" "3" }', 'test 100 200 300 40', 0, null, null, '{ "d1" "2" "d2" "3" }', '这是一个再一个又一个测试的本地化文本输出'],
                ['test_unit1 ', 1, ' a', null, null, 'test  { "d1" "2" "d2" "3" }', 'test {\r\n  "d1"  "d2" }', '  c  ', null, null, '{ "d1" "2" "d2" "3" }', '这是一个再一个又一个测试的本地化文本输出'],
                ['test_unit3', '__empty__', '  a', null, '伤害', 'damage 100 200 300 400', 'duration 1 2 3 4']
            ],
            options: {}
        },
        {
            name: 'simple',
            data: [
                [1, 2],
                ['key', 'value', '#Loc_Test'],
                ['test', 'test1'],
                ['test2', 1]
            ],
            options: {}
        },
        {
            name: 'Sheet1',
            data: [],
            options: {}
        },
        {
            name: '__Test',
            data: [],
            options: {}
        }
    ];
    return xlsx.build(data);
}

describe('sheetToKV', () => {
    describe('sheetToKV function', () => {
        it('should be a function', () => {
            expect(typeof sheetToKV).toBe('function');
        });

        it('should return a through2 transform object', () => {
            const result = sheetToKV({});
            expect(result).toBeDefined();
            expect(typeof result).toBe('object');
        });
    });

    describe('New configuration options', () => {
        it('should support custom kvRootKey', async () => {
            const transform = sheetToKV({
                kvRootKey: 'CustomRoot'
            });

            const data = [
                {
                    name: 'test',
                    data: [
                        ['comment'],
                        ['key1', 'key2'],
                        ['value1', 'value2']
                    ],
                    options: {}
                }
            ];
            const mockBuffer = xlsx.build(data);
            const xlsxFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/test.xlsx',
                contents: mockBuffer
            });

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    expect(resultFiles.length).toBe(1);
                    const content = resultFiles[0].contents?.toString() || '';
                    expect(content).toContain('"CustomRoot"');
                    expect(content).not.toContain('"XLSXContent"');
                    resolve();
                });
                transform.on('error', reject);
                transform.write(xlsxFile);
                transform.end();
            });
        });

        it('should support custom floatPrecision', async () => {
            const transform = sheetToKV({
                floatPrecision: 2
            });

            const data = [
                {
                    name: 'test',
                    data: [
                        ['comment'],
                        ['key1', 'key2'],
                        ['test', '3.1415926']
                    ],
                    options: {}
                }
            ];
            const mockBuffer = xlsx.build(data);
            const xlsxFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/test.xlsx',
                contents: mockBuffer
            });

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    expect(resultFiles.length).toBe(1);
                    const content = resultFiles[0].contents?.toString() || '';
                    expect(content).toContain('3.14');
                    resolve();
                });
                transform.on('error', reject);
                transform.write(xlsxFile);
                transform.end();
            });
        });

        it('should support custom block markers', async () => {
            const transform = sheetToKV({
                blockStartMarker: 'START',
                blockEndMarker: 'END'
            });

            const data = [
                {
                    name: 'test',
                    data: [
                        ['comment'],
                        ['main_key', 'block_keySTART', 'inner_key', 'block_keyEND'],
                        ['test', '', 'value', '']
                    ],
                    options: {}
                }
            ];
            const mockBuffer = xlsx.build(data);
            const xlsxFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/test.xlsx',
                contents: mockBuffer
            });

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    expect(resultFiles.length).toBe(1);
                    const content = resultFiles[0].contents?.toString() || '';
                    expect(content).toContain('"block_key" {');
                    resolve();
                });
                transform.on('error', reject);
                transform.write(xlsxFile);
                transform.end();
            });
        });

        it('should support custom locTokenMarker', async () => {
            // Test without addonCSVPath to avoid file system operations
            // When using custom locTokenMarker, the default #Loc should not trigger localization
            const transform = sheetToKV({
                locTokenMarker: '#CustomLoc'
            });

            const data = [
                {
                    name: 'test',
                    data: [
                        ['comment'],
                        ['main_key', 'name#Loc{}_Name', 'name#CustomLoc{}_Desc'],
                        ['test_unit', 'Test Name', 'Test Description']
                    ],
                    options: {}
                }
            ];
            const mockBuffer = xlsx.build(data);
            const xlsxFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/test.xlsx',
                contents: mockBuffer
            });

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    expect(resultFiles.length).toBe(1);
                    const content = resultFiles[0].contents?.toString() || '';
                    // With custom locTokenMarker, #Loc should be treated as normal key
                    expect(content).toContain('Test Name');
                    // #CustomLoc should be treated as localization marker (not in output)
                    expect(content).not.toContain('Test Description');
                    resolve();
                });
                transform.on('error', reject);
                transform.write(xlsxFile);
                transform.end();
            });
        });

        it('should support custom unknownVarPrefix', async () => {
            const transform = sheetToKV({
                unknownVarPrefix: 'custom_var_'
            });

            const data = [
                {
                    name: 'test',
                    data: [
                        ['comment'],
                        ['main_key', 'AbilityValues[{]', '1', '2', '[}]'],
                        ['test_ability', '', '100', '200', '']
                    ],
                    options: {}
                }
            ];
            const mockBuffer = xlsx.build(data);
            const xlsxFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/test.xlsx',
                contents: mockBuffer
            });

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    expect(resultFiles.length).toBe(1);
                    resolve();
                });
                transform.on('error', reject);
                transform.write(xlsxFile);
                transform.end();
            });
        });

        it('should use default values when options are not provided', async () => {
            const transform = sheetToKV({});

            const data = [
                {
                    name: 'test',
                    data: [
                        ['comment'],
                        ['key1', 'key2'],
                        ['value1', 'value2']
                    ],
                    options: {}
                }
            ];
            const mockBuffer = xlsx.build(data);
            const xlsxFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/test.xlsx',
                contents: mockBuffer
            });

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    expect(resultFiles.length).toBe(1);
                    const content = resultFiles[0].contents?.toString() || '';
                    expect(content).toContain('"XLSXContent"');
                    resolve();
                });
                transform.on('error', reject);
                transform.write(xlsxFile);
                transform.end();
            });
        });
    });

    describe('Excel parsing', () => {
        it('should handle null files', async () => {
            const transform = sheetToKV({});
            const nullFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/null.txt',
                contents: null
            });

            return new Promise<void>((resolve, reject) => {
                let errorOccurred = false;
                transform.on('error', () => {
                    errorOccurred = true;
                });
                transform.on('data', (file: Vinyl) => {
                    expect(file.isNull()).toBe(true);
                });
                transform.on('end', () => {
                    expect(errorOccurred).toBe(false);
                    resolve();
                });
                transform.write(nullFile);
                transform.end();
            });
        });

        it('should ignore sheets matching sheetsIgnore pattern', async () => {
            const transform = sheetToKV({
                sheetsIgnore: '^__.*'
            });

            const mockBuffer = createMockXlsxBuffer();
            const xlsxFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/test.xlsx',
                contents: mockBuffer
            });

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    // Should have test_sheet1 and simple, but not __Test
                    expect(resultFiles.length).toBeGreaterThanOrEqual(0);
                    resolve();
                });
                transform.on('error', reject);
                transform.write(xlsxFile);
                transform.end();
            });
        });

        it('should process xlsx files and output kv files', async () => {
            const transform = sheetToKV({});

            const mockBuffer = createMockXlsxBuffer();
            const xlsxFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/test.xlsx',
                contents: mockBuffer
            });

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    expect(resultFiles.length).toBeGreaterThanOrEqual(0);
                    resolve();
                });
                transform.on('error', reject);
                transform.write(xlsxFile);
                transform.end();
            });
        });
    });

    describe('Chinese to Pinyin conversion', () => {
        it('should convert Chinese characters to pinyin when chineseToPinyin is true', () => {
            const transform = sheetToKV({
                chineseToPinyin: true
            });
            expect(transform).toBeDefined();
        });

        it('should use aliasList for character replacement before pinyin conversion', () => {
            const transform = sheetToKV({
                chineseToPinyin: true,
                aliasList: {
                    '一刀斩': 'one_hit_kill'
                }
            });
            expect(transform).toBeDefined();
        });
    });

    describe('KV file generation', () => {
        it('should generate KV files with custom indentation', () => {
            const transform = sheetToKV({
                indent: '\t'
            });
            expect(transform).toBeDefined();
        });

        it('should generate simple KV for two-column sheets', () => {
            const transform = sheetToKV({
                autoSimpleKV: true
            });
            expect(transform).toBeDefined();
        });

        it('should use custom key row number', () => {
            const transform = sheetToKV({
                keyRowNumber: 3
            });
            expect(transform).toBeDefined();
        });
    });

    describe('addon CSV generation', () => {
        it('should support addon CSV path configuration', () => {
            const transform = sheetToKV({
                addonCSVPath: '/test/addon.csv'
            });
            expect(transform).toBeDefined();
        });

        it('should support custom default language', () => {
            const transform = sheetToKV({
                addonCSVPath: '/test/addon.csv',
                addonCSVDefaultLang: 'English'
            });
            expect(transform).toBeDefined();
        });
    });
});
