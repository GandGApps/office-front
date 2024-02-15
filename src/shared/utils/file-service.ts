import { FileTypeEnum } from "@enums/fileType.enum";
import { TFile } from "shared/types";

/**
 * Returns file by provigind its path from files map structure
 * @param files Map structure with files
 * @param path path to the file
 * @param fileName name of file to return
 */
export function getFileFromFilesMap(files: Map<string, TFile>, path: string, fileName: string): TFile | null {
    const splitedPath = path.split('/').filter(letter => letter !== '');
    const groupHistory = [];
    let group = files;
    while(splitedPath.length > 0) {
        const groupName = splitedPath.shift();
        if (!groupName) {
            return null;
        }
        const file = group.get(groupName);
        if (file?.type !== FileTypeEnum.group) {
            return null;
        }
        groupHistory.push(group);
        group = file.files;
    }
    if (!group.has(fileName)) {
        return null;
    }
    const file = group.get(fileName);
    if (!file) {
        return null;
    }
    return file;
};

